const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const connect = require("./config/db");
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
app.use(cors());
connect();
app.use(bodyParser.json());
const Feeds = require("./model/feeds.js");
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("fetch", () => {
    Feeds.find({}).then((ress) => {
      io.emit("users", ress);
    });
  });
});
app.get("/", (req, res) => {
  Feeds.find({}).then((ress) => {
    res.json({ message: ress });
  });
});

app.post("/user", (req, res) => {
  var newUser = new Feeds({
    name: req.body.name,
    place: req.body.place,
  });
  newUser.save().then((user) => {
    io.emit("fetch")
    res.send(user);
  });
});
server.listen(8080, () => {
  console.log("8080 is running");
});
