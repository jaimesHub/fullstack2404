import { Socket } from "socket.io";

export const socketHandler = (socket: Socket) => {
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
    socket.to(room).emit("message", `${socket.id}: ${message}`);
  });
};
