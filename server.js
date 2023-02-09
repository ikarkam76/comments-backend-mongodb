const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cors());

const routerApi = require("./api");
app.use("/api", routerApi);

const PORT = process.env.PORT || 8080;
const uriDb = process.env.DB_HOST;

const connection = mongoose.connect(uriDb);

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("comment", (msg) => {
    io.emit("comment", msg);
  });
  socket.on("replys", (msg) => {
    io.emit("replys", msg);
  });
});

connection
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Server not running. Error message: ${err.message}`)
  );