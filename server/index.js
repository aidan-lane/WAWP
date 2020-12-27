require("dotenv").config();

const express = require('express');
const cors = require("cors");
const db = require("./db");
const itemsRoute = require("./routes/items");

const app = express();
app.use(express.json());
app.use(cors());

/* Routes */
app.use("/items", itemsRoute);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('hello!'));

const server = app.listen(port, () => console.log(`Server running on port: ${port}`));

/* Socket IO */
const io = require("socket.io")(server);

io.on("connection", () => {
    console.log("user connected");
});