const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.send("serveur connecté");
});

module.exports = router;
