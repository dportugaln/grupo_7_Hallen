const { Product, Category, Order, Color, Rol, Size, User } = require("./models")
// const Product = require("./models/ProductModel");
// const Category = require("./models/CategoryModel");
// const Order = require("./models/OrdersModel");
// const Color = require("./models/ColorModel");
// const Rol = require("./models/RolModel");
// const Size = require("./models/SizeModel");
// const User = require("./models/UserModel");


Product.belongsTo(Category, {
  as: "Category",
  foreignKey: "Category_idCategory",
});

Category.hasMany(Product, {
  as: "Product",
  foreignKey: "Category_idCategory",
});

Product.belongsToMany(Order, {
  as: "Order",
  through: "orders_has_products",
  foreignKey: "Product_idProduct",
  otherKey: "orders_idorders",
  timestamps: false,
});

Order.belongsToMany(Product, {
  as: "Product",
  through: "orders_has_products",
  foreignKey: "orders_idorders",
  otherKey: "Product_idProduct",
  timestamps: false,
});

Product.belongsToMany(Color, {
  as: "Color",
  through: "products_has_color",
  foreignKey: "Products_idProduct",
  otherKey: "Color_idColorProducts",
  timestamps: false,
});

Color.belongsToMany(Product, {
  as: "Product",
  through: "products_has_color",
  foreignKey: "Color_idColorProducts",
  otherKey: "Products_idProduct",
  timestamps: false,
});

Product.belongsToMany(Size, {
  as: "Size",
  through: "products_has_size",
  foreignKey: "Products_idProduct",
  otherKey: "Size_idSize",
  timestamps: false,
});

Size.belongsToMany(Product, {
  as: "Product",
  through: "products_has_size",
  foreignKey: "Size_idSize",
  otherKey: "Products_idProduct",
  timestamps: false,
});

Order.hasMany(User, {
  as: "User",
  foreignKey: "idUsers",
});

User.belongsTo(Order, {
  as: "Order",
  foreignKey: "idUsers",
});

Rol.hasMany(User, {
  as: "User",
  foreignKey: "rol_idrol",
});

User.belongsTo(Rol, {
  as: "Rol",
  foreignKey: "rol_idrol",
});




module.exports = { Product, User, Size, Rol, Color, Order, Category };
