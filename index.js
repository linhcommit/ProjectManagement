const express = require("express");
const app = express();

// Nhúng file index.routes.js
const routesClient = require("./routes/client/index.routes");

const port = 3000;

app.set("views","./views");
app.set("view engine", "pug");

app.get("/",(req,res) =>{
    res.render("./client/pages/home/index");
})

routesClient(app);

app.listen(port, () => {
    console.log("Successfull!!!");
    console.log(`App is litening on http://localhost:${port}`);
})