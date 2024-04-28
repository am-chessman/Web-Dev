import express, { urlencoded } from "express";

const app = express();
const port = 3000;
let day = new Date();
let today = day.getDay();

app.get("/", (req, res) => {
    if (today == 0 || today == 1) {
        res.render("index.ejs", {
            dayType: "a weekend",
            advice: "it's time to relax"
        });
    }
    else {
        res.render("index.ejs", {
            dayType: typeDay,
            advice: adv
        })
    }
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})