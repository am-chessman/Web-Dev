import express, { response } from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express()
const port = 3000
const cityName = "Stockholm";
const limit = 100;
const ApiKey = "93c9563c219fd26bcf5872a459d436c0";

app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.post("/submit", async (req, res) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&limit=${limit}&appid=${ApiKey}`)
        res.json(response.data[1])
    } catch (error) {
        console.error("Error fetching data", error)
        res.status(500).send("Error fetching data")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
