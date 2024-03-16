module.exports = (app) => {
    app.get("/products",(req,res) => {
        res.render("client/pages/products/index");
    })
    
    app.get("/user", (req, res) => {
        res.send("Profile User Ly Bao Khanh\nNgay mua hang: 17/03/2024");
    });
    
    app.get("/admin", (req, res) => {
        res.send("This page belongs to the administrator!!!");
    })
}