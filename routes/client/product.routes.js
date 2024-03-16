const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
    res.render(".././views/client/pages/user/index.pug");
});

router.get("/admin", (req, res) => {
    res.render(".././views/client/pages/admin/index.pug");
})

router.get("/edit", (req, res) => {
    res.send("Edit Product!");
})

module.exports = router;