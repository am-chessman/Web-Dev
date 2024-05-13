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
app.set("view engine", "ejs");

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
    res.render("login.ejs")
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email)

        const checkCredential = await db.query('SELECT * FROM userinfo WHERE email = $1', [email]);
        const storedUser = checkCredential.rows[0];

        if (!storedUser) {
            res.render('login.ejs', {invalidUser: "User doesn't exist"})
        } else {
            bcrypt.compare(password, storedUser.password, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    if (result) {
                        res.redirect('/home')
                    } else {
                        res.render('login', {invalidPass: "Wrong password. Try again"})
                    }
                }
            })
        }        
    } catch (err) {
        if (err) console.log(err);
    }
});

app.get('/home', (req, res) => {
    res.render('home.ejs')
})

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
})

app.post('/signup', async (req, res) => {
    const { username, email, newpass, confpass, gender } = req.body;

    try {
        if (newpass !== confpass) {
            res.render('signup.ejs', { passNoMatch: "Info", passNoMatchAlert: "Passwords do not match"})
            console.log('class created')
            return;
        } else {
            await bcrypt.hash(newpass, saltRounds, async (err, hash) => {
                if (err) {
                    console.log(err)
                } else {
                    await db.query('INSERT INTO userinfo (username, email, password, gender) VALUES ($1, $2, $3, $4)', [username, email, hash, gender,]);
                    console.log("Information sent and saved")
                    res.redirect('/')
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal server error')
    }
})

app.listen(port, () => {
    console.log("Server running on port:", { port })
});