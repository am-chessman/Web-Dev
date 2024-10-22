import express, { urlencoded, } from "express"   
import helmet from "helmet"
import "dotenv/config"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import session from "express-session"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { Strategy as LocalStrategy } from "passport-local"
import passport from "passport"
import bcrypt from "bcrypt"

const app = express()
const port = process.env.PORT || 3000
const __dirname = dirname(fileURLToPath(import.meta.url));

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
    }
}))
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, {
            id: user.id,
            username: user.username,
            picture: user.picture
        })
    })
})

//Process user data
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "public/index.html"))
})

// Authenticate user
app.post("/submit", passport.authenticate("local", {failureRedirect: "/", failureMessage: true}), (req, res) => {
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})