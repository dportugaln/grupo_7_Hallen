// const {Product, Category, Orders, Color, Rol, Size, User } = require("./models")
const Product = require("./models/ProductModel");
const Category = require("./models/CategoryModel");
const Order = require("./models/OrdersModel");
const Color = require("./models/ColorModel");
const Rol = require("./models/RolModel");
const Size = require("./models/SizeModel");
const User = require("./models/UserModel");

Product.associate = (models) => {
    Product.belongsTo(Category, {
        as: "category",
        foreignKey: "Category_idCategory"
    })
};

Product.associate = (models) => {
    Product.belongsToMany(Order, {
        as: "order",
        foreignKey: "orders_idorders",
    })
};

Product.associate = (models) => {
    Product.belongsTo(Color, {
        as: "color",
        foreignKey: "Products_idProduct",
    })
};

Product.associate = (models) => {
    Product.belongsTo(Size, {
        as: "size",
        foreignKey: "Size_idSize",
    })
};

Category.associate = (models) => {
    Category.hasMany(Product, {
        as: "product",
        foreignKey: "Category_idCategory"
    })
};

Order.associate = (models) => {
    Order.belongsToMany(Product, {
        as: "order",
        foreignKey: "orders_idorders"
    })
};

Order.associate = (models) => {
    Order.belongsTo(User, {
        as: "order",
        foreignKey: "users_idUsers"
    })
};

Color.associate = (models) => {
    Color.belongsToMany(Product, {
        as: "product",
        foreignKey: "Products_idProduct"
    })
};

Rol.associate = (models) => {
    Rol.hasMany(User, {
        as: "user",
        foreignKey: "rol_idrol"
    })
};

Size.associate = (models) => {
    Size.belongsTo(Product, {
        as: "product",
        foreignKey: "Products_idProduct",
    });
};

User.associate = (models) => {
    User.hasMany(models.Rol, {
        as: "rol",
        foreignKey: "rol_idrol",
    });
};

User.associate = (models) => {
    User.belongsTo(models.Order, {
        as: "order",
        foreignKey: "user_idUsers",

    });
};


