const express = require("express");
const router = express.Router();
// Viết như này cũng được: const router = express;

// Nhúng các hàm bên phía product.controller.js vào product.routes.js
const controller = require("../../controllers/client/product.controller");

router.get("", controller.index)

router.get("/admin", controller.admin)

router.get("/edit", controller.edit)

router.get("/detail",controller.detail)

module.exports = router;