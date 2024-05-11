import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const host = "192.168.1.43";
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
    const email = req.body.email;
    const password = req.body.password;
    console.log("Attempeting to log in")

    try {
        const checkCredential = await db.query('SELECT * FROM userinfo WHERE email = $1', [email]);
        if (checkCredential.rows.length > 0) {
            const storedEmail = checkCredential.rows[0];
            const storedPassword = checkCredential.rows[1];

            console.log(storedEmail[0])
            if (email == storedEmail) {
                if (password == storedPassword) {
                    res.redirect('name.ejs')
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

app.post('/signup/age', (req, res) => {
    res.render('age.ejs')
})

app.post('/signup/password', async (req, res) => {
    const password = req.body.password;

    try {
        if (!password) {
            return res.render('password.ejs', { error: 'Password is required' });
        }

        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                throw err;
            } else {
                console.log("Password hashed successfully: ", hash);
                await db.query("INSERT INTO userinfo (email, password, dateofbirth, gender) VALUES ($1, $2, $3, $4)", [email, hash, birthday, gender]);
                console.log("Information inserted successfully");
                res.send("Information inserted successfully");
            }
        });
    } catch (err) {
        console.log('An error occurred:', err);
        res.render('password.ejs', { error: 'An error occurred. Please try again.' });
    }
});


app.listen(port, host, () => {
    console.log("Server running on port:", { port })
});


//try {
//    if (!password) {
//        throw new Error('Password is required')
//    } else {

//        bcrypt.hash(password, saltRounds, async (err, hash) => {
//            if (err) {
//                throw err;
//                console.log("Error hashing password: ", err);
//            } else {
//                console.log("Password hashed successfully: ", hash);
//                await db.query("INSERT INTO userinfo (email, password, dateofbirth, gender) VALUES ($1, $2, $3, $4)", [email, hash, birthday, gender,]);
//                res.send("Information Inserted successfully");
//            };
//        });
//    }

//} catch (err) {
//    console.log('An error occurred. Please try again.')
//    if (err) console.log(err);
//}