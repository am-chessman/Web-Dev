import express, { urlencoded, } from "express"   
import "dotenv/config"
// import { fileURLToPath } from "url"
// import { dirname, join } from "path"
import router from "./routes/routes.js"
import setupMiddleware from "./middleware/middleware.js"
import setupPassport from "./middleware/passport-config.js"
import rateLimiterHandler from "./utils/rate-limiter.js"

const app = express()
const port = process.env.PORT || 3000

//Unnecessary since inex.html is being rendered by "express.static"
// const __dirname = dirname(fileURLToPath(import.meta.url));

//Middleware and authentication
setupMiddleware(app)
setupPassport()
rateLimiterHandler()

app.use(router)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})