const socket = io("http://localhost:3001");

let currentRoom = "";
let typingTimeout = null;

const roomInput = document.getElementById("room");
const btnJoinRoom = document.getElementById("joinRoom");
const messageInput = document.getElementById("message");
const btnSendMessage = document.getElementById("sendMessage");
const messageDiv = document.getElementById("messages");
const typingIndicator = document.getElementById("typingIndicator");
// const typingSpan = document.getElementById("typing");

btnJoinRoom.onclick = () => {
    const room = roomInput.value.trim();
    if (room) {
        currentRoom = room;
        socket.emit("joinRoom", room);
        messageDiv.innerHTML = `<li><strong>You joined room ${room}</strong></li>`;
    }
};

btnSendMessage.onclick = () => {
    const message = messageInput.value.trim();
    if (message && currentRoom) {
        socket.emit("message", currentRoom, message);
        messageDiv.innerHTML += `<li><strong>You:${message}</strong></li>`;
        messageInput.value = "";
        socket.emit("stopTyping", currentRoom);
    }
};

messageInput.oninput = () => {
    if (currentRoom) {
        socket.emit("typing", currentRoom);
        clearTimeout(typingTimeout);
        timeoutTyping = setTimeout(() => {
            socket.emit("stopTyping", currentRoom);
        }, 3000);
    }
};

socket.on("message", (message) => {
    messageDiv.innerHTML += `<li>${message}</li>`;
});

socket.on("typing", (user) => {
    typingIndicator.innerHTML = `<strong>${user}</strong>`;
});

socket.on("stopTyping", () => {
    typingIndicator.innerHTML = "";
});