import express from "express"
import passport from "passport"
import rateLimiterHandler from "../utils/rate-limiter.js"

const router = express.Router()

// router.get("/", (req, res) => {
//     res.render("index.ejs")
// })

router.post("/submit", rateLimiterHandler, passport.authenticate("local", {
    successRedirect: "/dashboard",  
    failureRedirect: "/failed", 
    failureMessage: true,
    failureFlash: true
}))

router.get(
    "/auth/google", 
    passport.authenticate("google", 
    {
        scope: ["profile", "email"]
    }
))

router.get(
    "/auth/google/callback",
    passport.authenticate("google", 
    {
        successRedirect: "/dashboard",
        failureRedirect: "/",
    })
);  

router.get(
    "/auth/github", 
    passport.authenticate("github", 
    {
        scope: ["profile", "email"]
    }
))

router.get(
    "/auth/github/callback",
    passport.authenticate("github", 
    {
        successRedirect: "/dashboard",
        failureRedirect: "/",
    })
);  

router.get("/dashboard", (req, res) => {
    if (req.isAuthenticated()) {
        res.send("Welcome! You are logged in.");
    } else {
        res.redirect("/"); 
    }
});

router.get("/failed", (req, res) => {
    const error = req.flash("error")
    res.send(`Login failed: ${error.length ? error[0] : "Unknown error"}`)
})

router.get("/password-recovery", (req,res) => {
    res.status(200).sendFile("signup.html", { root: "./public" })
})

export default router