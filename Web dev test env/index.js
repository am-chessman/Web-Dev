import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
