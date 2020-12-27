const express = require("express");
const db = require("../db");

const router = express.Router();

/* Get */
router.get("/", async (req, res) => {
    //db.ref("items").remove();

    let items = [];
    db.ref("items").once("value").then((snapshot) => {
        snapshot.forEach((item) => {
            items.push(item.val());
        });
    });

    return res.send(items);
});

module.exports = router;