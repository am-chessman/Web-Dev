import helmet from "helmet";
import session from "express-session";
import flash from "connect-flash";
import passport from "passport";
import express, { urlencoded } from "express";
import "dotenv/config"

const setupMiddleware = (app) => {
    app.use(helmet());
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    app.use(urlencoded({ extended: true }));
    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: false,
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true
            },
        })
    );
    app.use(flash());
    app.use((req, res, next) => {
        res.locals.errorMessage = req.flash("error");
        next();
    });
    app.use(passport.initialize());
    app.use(passport.session());
};

export default setupMiddleware;
