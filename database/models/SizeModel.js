module.exports = (sequelize, DataTypes) => {
  let alias = "Size";
  let cols = {
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
  }
  let conf = {
    timestamps: false,
    tableName: "size",
  };
  const Size = sequelize.define(alias, cols, conf);

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
