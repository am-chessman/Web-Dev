import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import pg from "pg";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import { spawnSync } from 'child_process';
import crypto from 'crypto';

const app = express();
// const hostname = '192.168.1.125';
const port = 3000;
const server = createServer(app);
const io = new Server(server);
// const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new pg.Client({
    user: "postgres",
    password: "chessman",
    database: "chat app",
    host: "localhost",
    port: 5432
})
const saltRounds = 10;

db.connect()
    .then(() => {
        console.log("Connected to database")
    })
    .catch((error) => {
        console.log("Error connecting to database", error)
    })

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended:true }))
app.use(session({
    secret: "SECRETWORD",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new Strategy(async function verify(username, password, done) {
        try {
            const result = await db.query("SELECT * FROM users WHERE email = $1", [username])

            // console.log(result.rows[0])

            if (result.rows.length > 0) {
                const user = result.rows[0]
                const storedHashedPassword = user.password

                // console.log(storedHashedPassword)

                bcrypt.compare(password, storedHashedPassword, (err, valid) => {
                    if (err) {
                        console.error("Error comparing passwords: ", err)
                        return cb(err);
                    } else {
                        if (valid) {
                            return done(null, user)
                        } else {
                            return done(null, false)
                        }
                    }
                })
            } else {
                console.error("User not found")
            }
        } catch (error) {
            console.log(error)
        }
    })
);

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

app.get("/", (req, res) => {
    res.render("login.ejs");
});

app.post("/home", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
}));

var userIdQuery = 0;
app.get("/home", async(req, res) => {
    if (req.isAuthenticated()) {
        res.render("index.ejs", { user: req.user });
    } else {
        res.redirect("/");
    }
});

app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/")
    })
})

app.get("/signup", (req, res) => {
    res.render("register.ejs")
})

app.post("/signup", async (req, res) => {
    const { username, email, password, confirmPassword } = req.body
    console.log(username, email, password, confirmPassword)
    if (password !== confirmPassword) {
        res.render("register.ejs", {badPass: "Passwords don't match"})
    } else {
        try {
            const userID = uuidv4();
            const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email])
            if (checkResult.length > 0) {
                console.log("Email already exists")
            } else {
                bcrypt.hash(password, saltRounds, async (err, hash) => {
                    if (err) {
                        console.log("Error hashing passwords", hash)
                    } else {
                        await db.query("INSERT INTO users (email, password, user_id, username) VALUES ($1, $2, $3, $4)", [email, hash, userID, username])            
                        res.redirect("/home", { user: req.username })
                    }
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
})

io.on('connect', (socket) => {
    console.log('Connected');
    socket.on('message', (msg) => {
        io.emit('message', msg); 
        const messageContent = msg.message;

        // Function to generate RSA keys (public and private)
        const generateRSAKeys = () => {
            const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
                modulusLength: 2048,
                publicKeyEncoding: {
                    type: 'spki',
                    format: 'pem',
                },
                privateKeyEncoding: {
                    type: 'pkcs8',
                    format: 'pem',
                },
            });
            return { publicKey, privateKey };
        };
        
        // Function to encrypt a message with AES and encrypt the AES key with RSA
        const encryptMessage = (message, recipientPublicKey) => {
            // Generate random AES session key
            const sessionKey = crypto.randomBytes(32);
            const iv = crypto.randomBytes(16); // Initialization vector for AES encryption
        
            // Encrypt the message with AES (AES-GCM for authenticated encryption)
            const cipher = crypto.createCipheriv('aes-256-gcm', sessionKey, iv);
            let encryptedMessage = cipher.update(message, 'utf8', 'hex');
            encryptedMessage += cipher.final('hex');
            const authTag = cipher.getAuthTag();
        
            // Encrypt the AES session key with recipient's public RSA key
            const encryptedSessionKey = crypto.publicEncrypt(
                recipientPublicKey,
                sessionKey
            );
        
            // Return encrypted session key, iv, auth tag, and encrypted message
            return {
                encryptedSessionKey: encryptedSessionKey.toString('base64'),
                iv: iv.toString('base64'),
                authTag: authTag.toString('base64'),
                encryptedMessage: encryptedMessage,
            };
        };
        
        // Function to decrypt the message using the private RSA key and AES session key
        const decryptMessage = (encryptedSessionKey, iv, authTag, encryptedMessage, recipientPrivateKey ) => {
            // Decrypt the AES session key with recipient's private RSA key
            const decryptedSessionKey = crypto.privateDecrypt(
                recipientPrivateKey,
                Buffer.from(encryptedSessionKey, 'base64')
            );
        
            // Decrypt the message using AES with the decrypted session key
            const decipher = crypto.createDecipheriv(
                'aes-256-gcm',
                decryptedSessionKey,
                Buffer.from(iv, 'base64')
            );
            decipher.setAuthTag(Buffer.from(authTag, 'base64'));
        
            let decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8');
            decryptedMessage += decipher.final('utf8');
        
            return decryptedMessage;
        };
        
        // Main function to demonstrate E2EE
        const main = () => {
            // Generate RSA keys for two users (simulating User A and User B)
            const { publicKey: publicKeyA, privateKey: privateKeyA } = generateRSAKeys();
            const { publicKey: publicKeyB, privateKey: privateKeyB } = generateRSAKeys();
        
            // console.log(`User A Public Key: ${publicKeyA}`);
            // console.log(`User B Private Key: ${privateKeyB}`);
        
            // User A wants to send a message to User B
            const message = messageContent;
        
            // Encrypt the message using User B's public key
            const encryptedData = encryptMessage(message, publicKeyB);
        
            // console.log('\nEncrypted Data:', encryptedData);
        
            // Now User B decrypts the message with their private key
            const decryptedMessage = decryptMessage(
                encryptedData.encryptedSessionKey,
                encryptedData.iv,
                encryptedData.authTag,
                encryptedData.encryptedMessage,
                privateKeyB
            );
        
            // console.log(`\nDecrypted Message: ${decryptedMessage}`);
        };
        
        main();        

        async function appendToDbms() {
            try {
                if (userIdQuery && userIdQuery.rows && userIdQuery.rows.length > 0) {
                    const senderIDQuery = await db.query(
                        "SELECT user_id FROM users WHERE email = $1",
                        [userIdQuery.rows[0].email]
                    );
                    if (senderIDQuery.rows && senderIDQuery.rows.length > 0) {
                        const senderID = senderIDQuery.rows[0].user_id;
                        await db.query("INSERT INTO messages (sender_id, message) VALUES ($1, $2)", [senderID, messageContent]);
                    } else {
                        console.log("No sender ID found for the given email.");
                    }
                } else {
                    console.log("userIdQuery is not populated or has no rows.");
                }
            } catch (error) {
                console.error("Error fetching sender ID:", error);
            }
        };              

        setTimeout(async () => {
            await appendToDbms();
        }, 3000);
    });
});

server.listen(port, () => {
    console.log(`Server up and listening on port ${port}`);
});
