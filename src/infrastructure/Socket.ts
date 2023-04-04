import { Server } from "socket.io";
import http from "http";
import https from "https";
import fs from "fs";

const httpServer = http.createServer();
const httpsOptions = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.crt"),
};
const httpsServer = https.createServer(httpsOptions);

const io = new Server();

const httpSocket = io.listen(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const httpsSocket = io.listen(httpsServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

httpServer.listen(3000, () => {
  console.log("HTTP server listening on port 3000");
});

httpsServer.listen(3001, () => {
  console.log("HTTPS server listening on port 3001");
});

httpSocket.on("connection", (socket) => {
  console.log("New client connected on HTTP socket");
});

httpsSocket.on("connection", (socket) => {
  console.log("New client connected on HTTPS socket");
});

export { httpSocket, httpsSocket };
