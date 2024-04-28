import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("<h1 style='display:flex; justify-content:center; align-items:center;'>Hello guys</h1>")
})

app.get('/about', (req, res) => {
  res.send("<h1 style='display:flex; justify-content:center; align-items:center;'>About me</h1>")
})

app.get('/contact', (req, res) => {
  res.send("<h1 style='display:flex; justify-content:center; align-items:center;'>Contact Me</h1>")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
