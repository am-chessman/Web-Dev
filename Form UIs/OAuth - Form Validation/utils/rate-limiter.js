import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: "Too many login attempts, please try again later",
})

export default limiter