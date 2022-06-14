module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    idSize: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primeryKey: true,
      allowNull: false,
    },
    nameSize: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });
  Size.associate = (models) => {
    Size.belongsTo(models.Product, {
      as: "product",
      foreignKey: "Products_idProduct",
    });
  };
  return Size;
};
