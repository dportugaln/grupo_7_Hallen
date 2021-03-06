const path = require("path");

module.exports = {
  home: (req, res) => {
    res.render(path.join(__dirname, "../views/dinamic/home"));
  },
  carrito: (req, res) => {
    res.render(path.join(__dirname, "../views/dinamic/carrito"));
  },
  categories: (req, res) => {
    res.render(path.join(__dirname, "../views/dinamic/categories"));
  },

  aboutus: (req, res) => {
    res.render(path.join(__dirname, "../views/static/aboutus"));
  },
  contact: (req, res) => {
    res.render(path.join(__dirname, "../views/static/contact"));
  },
  login: (req, res) => {
    res.render(path.join(__dirname, "../views/static/login"));
  },
};
