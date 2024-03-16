const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
    res.render(".././views/client/pages/products/index");
})

router.get("/admin", (req, res) => {
    res.render(".././views/client/pages/admin/index");
})

router.get("/edit", (req, res) => {
    res.send("Edit Product!");
})

module.exports = router;