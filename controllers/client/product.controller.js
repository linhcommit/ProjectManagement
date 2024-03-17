// This file contain function control for product
// Copy function in product.routes.js to here and modify it to use in client

// [GET] /products/ 
module.exports.index = (req, res) => {
    // Mặc định đã đi vào views folder 
    res.render("client/pages/products/index");
}

// [GET] /products/detail
module.exports.detail = (req, res) => {
    res.send("Trang chi tiết sản phẩm");
}

//[GET] /products/edit
module.exports.edit = (req, res) => {
    res.send("Edit Product!");
}

// [GET] /products/admin 
module.exports.admin = (req, res) => {
    // Mặc định đã đi vào views folder 
    res.render("client/pages/admin/index");
}

