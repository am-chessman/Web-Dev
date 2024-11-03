import express from "express"
import countriesObject from "./countries.js"

const app = express()
const PORT = 3000

app.get("/data", (req, res) => {
    res.status(200).json(countriesObject)
})

app.get("/data/:country", (req, res) => {
    let found = false
    const countryName = req.params.country

    for (let key in countriesObject) {
        if (key.toLowerCase() == countryName.toLowerCase()) {
            found = true
            res.status(200).send(`<h1 style="display: flex; justify-self: center;">${countriesObject[key]}</h1>`)
        }
    }

    if (!found) {
        res.status(404).send("Country not found")
    }
})

app.listen(PORT, (req, res) => {
    console.log(`App listening on port ${PORT}`)
})