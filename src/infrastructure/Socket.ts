import { Server } from "socket.io";
import http from "http";

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const socket = io.listen(3000);

socket.on("connection", (socket) => {
  console.log("New client connected on socket");
});

socket.on("PERSISTED", () => console.log("worked"));

export { socket };
