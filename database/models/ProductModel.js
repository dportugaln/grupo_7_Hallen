module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    idProduct: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primeryKey: true,
      allowNull: false,
    },
    nameProduct: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descriptionProduct: {
      type: DataTypes.TEXT(),
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
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
  });
};
