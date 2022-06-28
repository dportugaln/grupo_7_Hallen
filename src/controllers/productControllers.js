const fs = require("fs");
const path = require("path");
const {
  Product,
  Category,
  User,
  Color,
  Order,
  Rol,
  Size,
} = require("../../database/associations");

// const productsFilePath = path.join(__dirname, "../../data/products.json");
// const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

module.exports = {
  categories: (req, res) => {
    Product.findAll()
    .then((product) =>{
      res.render(path.join(__dirname, "../views/dinamic/categories"), { products });
    })
    
  },
  index: (req, res) => {
    Order.findAll({
      include: ["Product"],
    })
      .then((products) => {
        return res.json({ products });
      })
      .catch((error) => res.send(error));
  },

  store: (req, res) => {
    const _body = req.body;
    // console.log('_body ->', _body);
        _body.image = req.file ? req.file.filename : '';
        
        Product.create({
          nameProduct: _body.name,
          descriptionProduct: _body.description,
          imageProduct: _body.image,
          Category_idCategory: _body.category,
          priceProduct: _body.price,
          stockProduct: _body.stock
        }).then(productCreated => {
          // console.log('productCreated', productCreated);
          return res.redirect(`/products/create`);
        })
  },
  create: (req, res) => {
    Category.findAll().then( categories => {
      // console.log('categories', categories);
      return res.render(path.join(__dirname, "../views/static/productCreate"), { categories });
    })
    // let colors = await Color.findAll();
  },
  // detail: (req, res) => {
  //   let id = req.params.id;
  //   // let product = products.find((product) => product.id == id);
  //   // res.render(path.join(__dirname, "../views/dinamic/product"), {
  //   //   product,
  //   // });
  // },
  edit: (req, res) => {
    let id = req.params.id;
    Product.findByPk(id).then( productToEdit => {
      Category.findAll().then( categories => {
        return res.render(path.join(__dirname, "../views/static/productEdit"), { categories, productToEdit });
      })
      // res.render(path.join(__dirname, "../views/static/productEdit"), {
      //   productToEdit
      // });
    })
    // let productToEdit = products.find((product) => product.id == id);
    // res.render(path.join(__dirname, "../views/static/productEdit"), {
    //   productToEdit,
    // });
  },
  update: (req, res) => {
    console.log("req.body", req.body);
    console.log("ID", req.params.id);

    const newProduct = req.body;
    const idProduct = Number(req.params.id);

    newProduct.image = req.file ? req.file.filename : '';

    Product.update({
      nameProduct: newProduct.name,
      descriptionProduct: newProduct.description,
      imageProduct: newProduct.image,
      Category_idCategory: newProduct.category,
      priceProduct: newProduct.price,
      stockProduct: newProduct.stock
    },{
      where: {idProduct: idProduct}
    });

    return res.redirect(`/products/create`);
    // let productToEdit = products.find((product) => product.id == id);

    // productToEdit = {
    //   id: productToEdit.id,
    //   ...req.body,
    //   image: productToEdit.image,
    // };

    // let newProducts = products.map((product) => {
    //   if (product.id == productToEdit.id) {
    //     return (product = { ...productToEdit });
    //   }
    //   return product;
    // });

    // fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, " "));
    // res.redirect("/");
  },
  destroy: (req, res) => {
    console.log(req);
    console.log("******req.body*********", req.body);
    console.log("******req.body*********", req.query);
    const _body = req.body;
    _body.image = req.file ? req.file.filename : '';
    _body.plop = 'plop';
    console.log("******req*********", _body);
    console.log("******req.body*********", req.body);
    // const idDeleted = Number(req.body.idDeleted);
    // console.log("idDeleted ->", idDeleted)
    
    // Product.destroy({
    //   where: {idProduct: idDeleted},
    // })
    return res.redirect(`/products/delete`);
    // let finalProducts = products.filter((product) => product.id != id);
    // fs.writeFileSync(
    //   productsFilePath,
    //   JSON.stringify(finalProducts, null, " ")
    // );
    // res.redirect("/");
  },
  delete: (req, res) => {
    console.log('Holis');
    return res.render(path.join(__dirname, "../views/static/productDelete"));
  },
};
