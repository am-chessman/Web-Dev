import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const hostname = '192.168.1.43';
const port = 3000;
const server = createServer(app);
const io = new Server(server);
const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new pg.Client({
    user: "postgres",
    password: "chessman",
    database: "chat_db",
    host: "192.168.1.43",
    port: 5432
})
const saltRounds = 10;

try {
    db.connect()
} catch (error) {
    console.log(error)
}   

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended:true }))
app.use(session({
    secret: "SECRETWORD",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new Strategy(async function verify(username, password, done) {
        try {
            const result = await db.query("SELECT * FROM users WHERE username = $1", [username])

            console.log(result.rows[0])

            if (result.rows.length > 0) {
                const user = result.rows[0]
                const storedHashedPassword = user.password

                console.log(storedHashedPassword)

                bcrypt.compare(password, storedHashedPassword, (err, valid) => {
                    if (err) {
                        console.error("Error comparing passwords: ", err)
                        return cb(err);
                    } else {
                        if (valid) {
                            return done(null, user)
                        } else {
                            return done(null, false)
                        }
                    }
                })
            } else {
                console.error("User not found")
            }
        } catch (error) {
            console.log(error)
        }
    })
);

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.get("/", (req, res) => {
    res.render("login.ejs");
});

app.post("/home", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
}));

app.get("/home", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("index.ejs", { user: req.user });
    } else {
        res.redirect("/");
    }
});

app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/")
    })
})

app.get("/signup", (req, res) => {
    res.render("register.ejs")
})

app.post("/signup", async (req, res) => {
    const { username, email, password, confirmPassword } = req.body
    console.log(username, email, password, confirmPassword)
    if (password !== confirmPassword) {
        res.render("register.ejs", {badPass: "Passwords don't match"})
    } else {
        try {
            const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email])
            if (checkResult.length > 0) {
                console.log("Email already exists")
            } else {
                bcrypt.hash(password, saltRounds, async (err, hash) => {
                    if (err) {
                        console.log("Error hashing passwords", hash)
                    } else {
                        await db.query("INSERT INTO users (email, username, password) VALUES ($1, $2, $3)", [email, username, hash])            
                        res.redirect("/home")
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
})

io.on('connect', (socket) => {
    console.log('Connected');
    socket.on('message', (msg) => {
        io.emit('message', msg); 
    });
});

server.listen(port, hostname, () => {
    console.log(`Server up and listening on port ${port}`);
});
