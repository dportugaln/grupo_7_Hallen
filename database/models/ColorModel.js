module.exports = (sequelize, DataTypes) => {
  let alias = "Color"
  let cols = {
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
  }
  let conf = {
    timestamps: false,
    tableName: "color",
  };
  const Color = sequelize.define(alias, cols, conf );

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
