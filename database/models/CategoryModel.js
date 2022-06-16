module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("category", {
    idCategory: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nameCategory: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });
  Category.associate = (models) => {
    Category.hasMany(models.Product, {
      as: "Product",
      foreignKey: "Category_idCategory",
    });
  };
  return Category;
};
