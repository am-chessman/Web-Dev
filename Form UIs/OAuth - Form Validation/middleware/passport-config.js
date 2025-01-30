import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { Strategy as LocalStrategy } from "passport-local"
import { Strategy as GithubStrategy } from "passport-github2"
import passport from "passport"
import "dotenv/config"
import bcrypt from "bcrypt"  // Hash Passwords

const setupPassport = () => {

    //Using Hardcorded user data for tests
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
    
    passport.use("google", new GoogleStrategy ({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
    }, (accessToken, refreshToken, profile, cb) => {
        // console.log("Google OAuth callback invoked");
        // console.log("Access Token: ", accessToken);
        // console.log("Refresh Token: ", refreshToken)
        // console.log("Profile: ", profile);
        return cb(null, profile)
    }
    ))

    passport.use("github", new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL, 
    },

    function (accessToken, refreshToken, profile, cb) {
        return cb (null, profile)
    }
))

    passport.serializeUser((user, cb) => {
        cb(null, user)
    })
    
    //Process user data
    passport.deserializeUser(function(user, cb) {
        cb(null, user)
    });
}

export default setupPassport