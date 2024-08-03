import express from "express";

const app = express()
const port = 3000
const hostname = "192.168.1.125"

// Get route
app.get("/", (req, res) => {
    res.send(`<h1>WELCOME TO MY SERVER</h1>`)
})

app.listen(port, hostname, (req, res) => {
    console.log(`Server up and running on port ${port}`)
})