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

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      as: "category",
      foreignKey: "Category_idCategory",
    });
  };

  // Product.associate = (models) => {
  //   Product.belongsTo(models.Color, {
  //     as: "color",
  //     foreignKey: "Products_idProduct",
  //   });
  // };
  //  Product.associate = (models) => {
  //   Product.belongsTo(models.Size, {
  //     as: "size",
  //     foreignKey: "Products_idProduct",
  //   });
  // };
  // Product.associate = (models) => {
  //   Product.belongsToMany(models.Order, {
  //     as: "order",
  //     foreignKey: "",
  //   });
  // };

  return Product;
};
