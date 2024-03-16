const express = require("express");
const app = express();

const port = 3000;

app.set("views","./views");
app.set("view engine", "pug");

app.get("/",(req,res) =>{
    res.render("./client/pages/home/index");
})

app.get("/products",(req,res) => {
    res.render("client/pages/products/index");
})

app.get("/user", (req, res) => {
    res.send("Profile User Ly Bao Khanh\nNgay mua hang: 17/03/2024");
});

app.get("/admin", (req, res) => {
    res.send("This page belongs to the administrator!!!");
})

app.listen(port, () => {
    console.log("Successfull!!!");
    console.log(`App is litening on http://localhost:${port}`);
})