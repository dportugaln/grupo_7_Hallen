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
  //  return console.log('hola categories')},
    Product.findAll().then( products => {
     return res.render(path.join(__dirname, "../views/dinamic/categories"), { products });
    })
  },
  
  index: (req, res) => {
    Product.findAll(
      // {include:{nameProduct, imageProduct}}
    ).then( products => {
      return res.render(path.join(__dirname, "../views/dinamic/home"), { products });
     })
    // res.render(path.join(__dirname, "../views/dinamic/categories"));
  },

  // create: (req, res) => {
  //   res.render(path.join(__dirname, "../views/static/productCreate"));
  // },
  store: (req, res) => {
    const _body = req.body;
    console.log('_body ->', _body);
        _body.image = req.file ? req.file.filename : '';
        _body.userId = Math.ceil(Math.random() * 3);
        
        Product.create({
          nameProduct: _body.name,
          descriptionProduct: _body.description,
          imageProduct: _body.image,
          Category_idCategory: _body.category,
          priceProduct: _body.price,
          stockProduct: _body.stock
        }).then(productCreated => {
          console.log('productCreated', productCreated);
          return res.redirect(`/products/create`);
        })

        // return res.render(path.join(__dirname, "../views/static/productCreate"), { categories });
        
        // Product
        //     .create(req.body)
        //     .then(productStored => {
        //         // Asociar los colores que querés al producto creado
        //         productStored.addColors(req.body.colors);
        //         return res.redirect(`products/${productStored.id}`);
        //     })
        //     .catch(error => res.send(error));
  },
  create: (req, res) => {
    // console.log('hola')
    Category.findAll().then( categories => {
      // console.log('categories', categories);
      return res.render(path.join(__dirname, "../views/static/productCreate"), { categories });
    })
    // let colors = await Color.findAll();
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
    console.log("¿¿¿¿¿", req.body);
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
