const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");

const app = express();

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "../")));

app.get("/", (req, res) => {
  return res.sendFile("index.html", { root: "../" });
});

const port = 5500;

server.listen(port, () => console.log("server on en " + port));
