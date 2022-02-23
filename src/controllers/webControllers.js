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
  product: (req, res) => {
    res.render(path.join(__dirname, "../views/dinamic/product"));
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
  stock: (req, res) => {
    res.render(path.join(__dirname, "../views/static/productCreate"));
  },
  edit: (req, res) => {
    res.render(path.join(__dirname, "../views/static/productEdit"));
  },
};
