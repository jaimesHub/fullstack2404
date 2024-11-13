const socket = io("http://localhost:3001");

let currentRoom = "";

const writeMessage = (message) => {
    const li = document.createElement("li");
    li.textContent = message;
    document.getElementById("messages").appendChild(li);
};

const leaveRoom = () => {
    if (currentRoom) {
        socket.emit("leaveRoom", currentRoom);
        currentRoom = "";
        const message = `You left room ${currentRoom}`;
        writeMessage(message);
        currentRoom = "";
    }
};

document.getElementById("leave").onclick = leaveRoom;

socket.on("connect", () => {
    console.log(`Connected to server w ID: ${socket.id}`);
});

socket.on("message", (message) => {
    console.log(`Message from server: ${message}`);
    writeMessage(message);
});

document.getElementById("join").onclick = () => {
    const room = document.getElementById("room").value;
    if (room) {
        if (currentRoom) {
            leaveRoom();
        }

        socket.emit("joinRoom", room);
        currentRoom = room;
        document.getElementById("messages").innerHTML = "";
        const message = `You joined room ${room}`;
        writeMessage(message);
    }
};

document.getElementById("send").onclick = () => {
    const value = document.getElementById("message").value;
    if (value && currentRoom) {
        socket.emit("message", currentRoom, value);
        const message = `You: ${value}`;
        writeMessage(message);
    } else if (!currentRoom) {
        const errorMessage = "You are not in a room";
        alert(errorMessage);
    }
};

