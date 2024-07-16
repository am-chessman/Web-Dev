import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server)
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

io.on("connect", (socket) => {
    socket.emit("welcome", {response: "Hello"})
    socket.on("greet", data => {
        console.log(data.greet)
    })
})

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});