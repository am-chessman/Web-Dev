const socket = io();

socket.on("welcome", data => {
    console.log(data.response)
    socket.emit("greet", {greet: "Hey"})
})