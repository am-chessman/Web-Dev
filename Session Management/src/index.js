import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

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

passport.use(new Strategy(function verify(username, password, done) {
    if (username !== "chessman" || password !== "chessman") {
        return done(null, false, { message: "Invalid username or password" });
    } else {
        return done(null, { id: 1, username: "chessman" });
    }
}));

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

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});
