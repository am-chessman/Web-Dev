import express, { response } from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express()
const port = 3000
const limit = 100;
const ApiKey = "93c9563c219fd26bcf5872a459d436c0";

app.use(bodyParser.urlencoded({extended: false}))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.post("/submit", async (req, res) => {
    const cityName = req.body.city
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&limit=${limit}&appid=${ApiKey}`)
        const placeData = {
            city: response.data[0]["name"], latitude: response.data[0]["lat"],
            longitude: response.data[0]["lon"]
        }
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${placeData.latitude}&lon=${placeData.longitude}&appid=${ApiKey}`)
        
        console.log(weather.data["weather"], weather.data["main"])

        res.send(
            `<div>
                <h1>City: ${placeData.city}</h1>
                <h1>Latitude: ${placeData.latitude}</h1>
                <h1>Longitude: ${placeData.longitude}</h1>
                <ul><h1>Current weather: </h1>
                    <li>Condition: ${weather.data["weather"][0].main}</li>
                    <li>Temperature: ${Math.floor(Math.round(weather.data["main"].temp - 273.15))}&degC</li>
                    <li>Feels like: ${Math.floor(Math.round(weather.data["main"].feels_like - 273.15))}&degC</li>
                    <li>Pressure: ${weather.data["main"].pressure}kPa</li>
                    <li>Condition: ${weather.data["main"].humidity}%</li>
                </ul>
            `)
    } catch (error) {
        console.error("Error fetching data", error)
        res.status(500).send("Error fetching data")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
