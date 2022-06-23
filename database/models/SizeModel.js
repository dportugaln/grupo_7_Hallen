module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("Size", {
    idSize: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nameSize: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });

  Size.associate = (models) => {
    Size.belongsToMany(models.Product, {
      as: "Product",
      through: "products_has_size",
      foreignKey: "Products_idProduct",
      otherKey: "idProducts",
      timestamps: false,
    });
  };
  return Size;
};
