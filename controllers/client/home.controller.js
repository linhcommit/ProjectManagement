//Copy function in home.routes.js to here and modify it to use in client

// [GET] /home
module.exports.index = (req, res) => {
    // Mặc định đã đi vào views folder 
    res.render("client/pages/home/index.pug");
}
// [GET] /home/user
module.exports.user = (req, res) => {
    // Mặc định đã đi vào views folder
    res.render("client/pages/user/index.pug");
}