module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("category", {
    // idCategory: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primeryKey: true,
    //   allowNull: false,
    // },
    nameCategory: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });
  Category.associate = (models) => {
    Category.hasToMany(models.Product, {
      as: "product",
      foreignKey: "Category_idCategory",
    });
  };
  return Category;
};
