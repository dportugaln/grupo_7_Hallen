const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

module.exports = {
  product: (req, res) => {
    res.render(path.join(__dirname, "../views/dinamic/product"));
  },

  create: (req, res) => {
    res.render(path.join(__dirname, "../views/static/productCreate"));
  },
  store: (req, res) => {
    if (req.file) {
      let newProduct = {
        id: products[products.length - 1].id + 1,
        ...req.body,
        image: req.file.filename,
      };
      products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect("/");
    } else {
      let newProduct = {
        id: products[products.length - 1].id + 1,
        ...req.body,
        image: "default-image.png",
      };
      products.push(newProduct);
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect("/products");
    }
  },
  edit: (req, res) => {
    res.render(path.join(__dirname, "../views/static/productEdit"));
  },
};
