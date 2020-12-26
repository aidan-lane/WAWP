require("dotenv").config();

const express = require('express');
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`Server running on port: ${port}`));