const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
    res.render(".././views/client/pages/home/index.pug");
});

router.get("/user", (req, res) => {
    res.render(".././views/client/pages/user/index.pug");
});

module.exports = router;