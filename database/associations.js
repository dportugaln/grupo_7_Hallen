// const {Product, Category, Orders, Color, Rol, Size, User } = require("./models")
const Product = require("./models/ProductModel");
const Category = require("./models/CategoryModel");

// User.belongsTo(Rol, {
//     as: "rol",
//     foreignKey: "rol_idrol",
// })

// Rol.hasMany(User, {
//     as: "user",
//     foreignKey: "rol_idrol",
// })
Product.associate = (models) => {
    Product.belongsTo(Category, {
        as: "category",
        foreignKey: "Category_idCategory"
    })
};

Category.associate = (models) => {
    Category.hasMany(Product, {
        as: "product",
        foreignKey: "Category_idCategory"
    })
};
