const productRoutes = require("./product.routes");

module.exports = (app) => {
    app.get("/products",(req,res) => {
        res.render("./client/pages/products/index");
    })

    app.use("/products",productRoutes);
}