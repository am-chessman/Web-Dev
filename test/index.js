import express, { request } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
const __dir = dirname(fileURLToPath(import.meta.url));
const saltRounds = 10;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//app.set("view engine", "ejs");

const db = new pg.Client({
    user: "postgres",
    password: "chessman",
    database: "userdata", 
    port: 5432,
    host: "192.168.1.128"
});

try {
    db.connect()
} catch (err) {
    console.log(err)
};

app.get('/', (req, res) => {
    res.render("index.ejs")
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const checkCredential = await db.query('SELECT * FROM userinfo WHERE email = $1', [email]);
        const storedUser = checkCredential.rows[0];

        if (checkCredential.rows.length > 0) {
            const storedEmail = storedUser.email;
            const storedPassword = storedUser.password;

            if (email == storedEmail) {
                if (password == storedPassword) {
                    console.log("Logged In Successfully")
                    res.render('name.ejs')
                } else {
                    const wrongPass = "You entered the wrong password";
                    res.send(wrongPass)
                }
            }
        } else {
            res.send("User doesn't exist")
        }
    } catch (err) {
        if (err) console.log(err);
    }
});

app.get('/signup/email', (req, res) => {
    res.render("email.ejs")
});

app.post('/signup/email', (req, res) => {
    try {
        const emailInput = req.body.email;
        console.log(emailInput)
    } catch (err) {
        console.log()
    }
    console.log('YEEEEEES')
})

app.post('/signup/age', (req, res) => {
    res.render('age.ejs');
    const ageInput = req.body.year +'-'+ req.body.month +'-'+ req.body.day
    const genderInput = req.body.genderOpt
});

app.post('/signup/password', (req, res) => {
    const passwordInput = req.body.newpass;
    console.log(passwordInput)
});

app.post('/home', (req, res) => {
    res.render('home.ejs')
})

app.listen(port, () => {
    console.log("Server running on port:", { port })
});
