import { Socket } from "socket.io";

export const socketHandler = (socket: Socket) => {
  console.log("connected user: ", socket.id);

  socket.on("message", (message: string) => {
    console.log("Received message: ", message);
    // socket.emit("message", "Hello from server");
    socket.broadcast.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected: ", socket.id);
  });
};
