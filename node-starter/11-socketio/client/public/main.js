const socket = io("http://localhost:3001");

// Listen for messages from the server
socket.on("message", (message) => {
    const li = document.createElement("li");
    li.textContent = message;
    document.getElementById("messages").appendChild(li);
});

// Send message to the server
document.getElementById("send").onclick = () => {
    const message = document.getElementById("message").value;
    socket.emit("message", message);
    document.getElementById("message").value = "";
};
