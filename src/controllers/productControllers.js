const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

module.exports = {
  categories: (req, res) => {
    res.render(path.join(__dirname, "../views/dinamic/categories"));
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
  detail: (req, res) => {
    let id = req.params.id;
    let product = products.find((product) => product.id == id);
    res.render(path.join(__dirname, "../views/dinamic/product"), {
      product,
    });
  },
  edit: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);
    res.render(path.join(__dirname, "../views/static/productEdit"), {
      productToEdit,
    });
  },
  update: (req, res) => {
    let id = req.params.id;
    let productToEdit = products.find((product) => product.id == id);

    productToEdit = {
      id: productToEdit.id,
      ...req.body,
      image: productToEdit.image,
    };

    let newProducts = products.map((product) => {
      if (product.id == productToEdit.id) {
        return (product = { ...productToEdit });
      }
      return product;
    });

    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
    res.redirect("/");
  },
  destroy: (req, res) => {
    let id = req.params.id;
    let finalProducts = products.filter((product) => product.id != id);
    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(finalProducts, null, " ")
    );
    res.redirect("/");
  },
};
