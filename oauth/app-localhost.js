import express, { urlencoded, } from "express"   
import helmet from "helmet"
import "dotenv/config"
// import { fileURLToPath } from "url"
// import { dirname, join } from "path"
import session from "express-session"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { Strategy as LocalStrategy } from "passport-local"
import passport from "passport"
import bcrypt from "bcrypt"
import flash from "connect-flash"

const app = express()
const port = process.env.PORT || 3000
//Unnecessary since inex.html is being rendered by "express.static"
// const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(helmet())
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(urlencoded({extended: true}))
//Create session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}))
app.use(flash())
app.use((req, res, next) => {
    res.locals.errorMessage = req.flash("error")
    next()
})
app.use(passport.initialize())
app.use(passport.session())

//Validate Login in
const hardCodedUser = {
    email: "chessman@email.com",
    password: "chessman"
}
passport.use("local", new LocalStrategy(
    {usernameField: "email"},
    function(email, password, done) {
        if (email !== hardCodedUser.email) {
            return done(null, false, {message: "Incorrect Email"})
        }

        if (password !== hardCodedUser.password) {
            return done(null, false, {message: "Incorrect password"})
        }

        return done(null, hardCodedUser)
}))

passport.serializeUser((user, cb) => {
    cb(null, user)
})

//Process user data
passport.deserializeUser(function(user, cb) {
    cb(null, user)
});

passport.use("google", new GoogleStrategy ({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
}, (accessToken, refreshToken, profile, cb) => {
    console.log("Google OAuth callback invoked");
    console.log("Access Token: ", accessToken);
    console.log("Refresh Token: ", refreshToken)
    console.log("Profile: ", profile);
    return cb(null, profile)
}
))

// app.get("/", (req, res) => {
//     res.render("index.ejs")
// })

// Authenticate user
app.post("/submit", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/failed", 
    failureMessage: true,
    failureFlash: true
}))

app.get(
    "/auth/google", 
    passport.authenticate("google", 
    {
        scope: ["profile", "email"]
    }
))

app.get(
    "/auth/google/callback",
    passport.authenticate("google", 
    {
        successRedirect: "/dashboard",
        failureRedirect: "/",
    })
);  

app.get("/dashboard", (req, res) => {
    if (req.isAuthenticated()) {
        res.send("Welcome! You are logged in.");
    } else {
        res.redirect("/"); 
    }
});

app.get("/failed", (req, res) => {
    const error = req.flash("error")
    res.send(`Login failed: ${error.length ? error[0] : "Unknown error"}`)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})