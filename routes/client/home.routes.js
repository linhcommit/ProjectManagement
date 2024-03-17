const express = require("express");
const router = express.Router();
// Viết như này cũng được: const router = express;

// Nhúng các hàm bên phía home.controller.js vào home.routes.js
const controller = require("../../controllers/client/home.controller");

router.get("", controller.index);

router.get("/user", controller.user);

module.exports = router;