import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import dotenv from "dotenv";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";

dotenv.config();

const app = express();
const port = 3000;
const __dir = dirname(fileURLToPath(import.meta.url));
const saltRounds = 10;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Ensure JSON parsing for JSON requests
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(
    session({
        secret: process.env.SESSION_SECRET || "cookie_password",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 }
    })
);

app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "MaraXnathaat2",
    database: process.env.DB_NAME || "userdata",
    port: process.env.DB_PORT || 5432,
    host: process.env.DB_HOST || "35.228.50.216"
});

db.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

app.get('/', (req, res) => {
    res.render("login.ejs");
});

app.get('/home', (req, res) => {
    if (req.isAuthenticated()) {
        res.render("home.ejs");
    } else {
        res.redirect("/");
    }
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.error("Error during authentication:", err);
            return next(err);
        }
        if (!user) {
            console.log("Authentication failed:", info.message);
            return res.redirect("/"); // Customize this as needed, e.g., send a message
        }
        req.logIn(user, err => {
            if (err) {
                console.error("Error during login:", err);
                return next(err);
            }
            console.log("Authentication successful, redirecting to /home");
            return res.redirect("/home");
        });
    })(req, res, next);
});

app.post('/signup', async (req, res) => {
    const { username, email, newpass, confpass, gender } = req.body;

    if (!username || !email || !newpass || !confpass || !gender) {
        return res.status(400).send("All fields are required");
    }

    if (newpass !== confpass) {
        return res.render('signup.ejs', { passNoMatch: "Info", passNoMatchAlert: "Passwords do not match" });
    }

    try {
        const hash = await bcrypt.hash(newpass, saltRounds);
        await db.query('INSERT INTO users (username, email, password, gender) VALUES ($1, $2, $3, $4)', [username, email, hash, gender]);
        res.redirect('/');
    } catch (err) {
        console.error("Error during signup:", err);
        res.status(500).send('Internal server error');
    }
});

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const result = await db.query('SELECT   * FROM users WHERE username = $1', [username]);
        const storedUser = result.rows[0];

        if (!storedUser) {
            return done(null, false, { message: "User doesn't exist" });
        }

        const isValid = await bcrypt.compare(password, storedUser.password);
        if (isValid) {
            return done(null, storedUser);
        } else {
            return done(null, false, { message: 'Incorrect password' });
        }
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
