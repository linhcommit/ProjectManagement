const productRoutes = require("./product.routes");
const homeRoutes = require("./home.routes")

module.exports = (app) => {
    app.use("/products",(req,res) => {
        res.render("./client/pages/products/index");
    })

    app.use("/products",productRoutes);
    app.use("/home",homeRoutes);
}