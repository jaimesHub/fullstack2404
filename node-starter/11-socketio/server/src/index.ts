import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
// import { socketHandler } from "./socket";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: Socket) => {
  socket.on("joinRoom", (room: string) => {
    socket.join(room);
    console.log(`User ${socket.id} joined room ${room}`);
    socket.to(room).emit("message", `${socket.id} has joined the room`);
  });

  socket.on("leaveRoom", (room: string) => {
    socket.leave(room);
    console.log(`User ${socket.id} left room ${room}`);
    socket.to(room).emit("message", `${socket.id} has left the room`);
  });

  socket.on("message", (room: string, message: string) => {
    console.log(`Message from room ${room}: ${message}`);
    io.to(room).emit("message", `${socket.id}: ${message}`);
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected`);
  });
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
