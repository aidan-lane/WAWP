require("dotenv").config();

const express = require('express');
const cors = require("cors");
const http = require("http");
const db = require("./db");
const itemsRoute = require("./routes/items");

const app = express();
const server = http.createServer(app);
const io = require("socket.io").listen(server);

const port = process.env.PORT || 3000;

//app.use(express.json());
app.use(cors());

/* Routes */
app.use("/items", itemsRoute);

app.get('/', (req, res) => {
    res.send('hello!');
});

/* Socket IO */
io.on("connection", (socket) => {
    socket.emit("state", 0);

    socket.on("data", (data) => {
        console.log("worked!");
    });
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});