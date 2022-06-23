module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define("Color", {
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

  Color.associate = (models) => {
    Color.belongsToMany(models.Product, {
      as: "Product",
      through: "products_has_color",
      foreignKey: "Products_idProduct",
      otherKey: "idProducts",
      timestamps: false,
    });
  };
  return Color;
};
