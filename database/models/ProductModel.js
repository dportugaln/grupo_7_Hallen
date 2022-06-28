module.exports = (sequelize, DataTypes) => {
  let alias = "Product";
  let cols = {
    idProduct: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nameProduct: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descriptionProduct: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageProduct: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    priceProduct: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
    },
    stockProduct: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
    },
    Category_idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };
  let conf = {
    timestamps: false,
    tableName: "products",
  };

  const Product = sequelize.define(alias, cols, conf);

  // Product.associate = (models) => {
  //   Product.belongsTo(models.Category, {
  //     as: "Category",
  //     foreignKey: "Category_idCategory",
  //   });
  //   Product.belongsToMany(models.Color, {
  //     as: "Color",
  //     through: "product_has_color",
  //     foreignKey: "Products_idProduct", //idProducts
  //     otherKey: "idProducts", //Products_idProduct
  //     timestamps: false,
  //   });
  // };

 
  // Product.associate = (models) => {
  //   Product.belongsToMany(models.Size, {
  //     as: "Size",
  //     through: "products_has_size",
  //     foreignKey: "Size_idSize",
  //     otherKey: "idSize",
  //     timestamps: false,
  //   });
  // };
  // Product.associate = (models) => {
  //   Product.belongsToMany(models.Order, {
  //     as: "Order",
  //     through: "orders_has_products",
  //     foreignKey: "Product_idProduct",
  //     otherKey: "orders_idorders",
  //   });
  // };

  return Product;
};
