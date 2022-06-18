module.exports = (sequelize, DataTypes) => {
  let alias = "category";
  let cols = {
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
  };
  let conf = {
    timestamps : false,
    tableName : "category"
  }
  const Category = sequelize.define(alias , cols, conf );
 
  Category.associate = (models) => {
    Category.belongsTo(models.Product, {
      as: "product",
      foreignKey: "Category_idCategory",
    });
  };
  return Category;
};
