module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    // idProduct: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primeryKey: true,
    //   allowNull: false,
    // },
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
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      as: "category",
      foreignKey: "Category_idCategory",
    });
  };

  return Product;
};
