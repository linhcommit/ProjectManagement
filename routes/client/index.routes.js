const productRoutes = require("./product.routes");
const homeRoutes = require("./home.routes");

module.exports = (app) => {
    app.use("/products",productRoutes);
    app.use("/home",homeRoutes);
}