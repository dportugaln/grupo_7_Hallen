module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define("color", {
    idColorProducts: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nameColor: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });
  
  // Color.associate = (models) => {
  //   Color.belongsTo(models.Product, {
  //     as: "product",
  //     foreignKey: "Products_idProduct",
  //   });
  // };
  return Color;
};
