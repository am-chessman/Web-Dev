import express, { response } from "express"
import axios from "axios"
import bodyParser from "body-parser"

const app = express();
const port = 3000;
const API_KEY = "LRETc3yIHmj305Qr0wOWa6dUI92x4p2IRJ78NVLW"

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", async(req, res) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        const responseData = response.data
        // res.status(200).json(responseData)
        res.render("index.ejs", {apiData: responseData})
    } catch (error) {
        console.log("Error collecting data", error)
    }
})

app.listen(port, (req, res) => {
    console.log(`Server up and running on port ${port}`)
})

app.get("/", (req, res) => {

})