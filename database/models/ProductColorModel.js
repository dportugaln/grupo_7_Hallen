module.exports = (sequelize, DataTypes) => {
    let alias = "ProductsHasColor";
    let cols = {
      Product_idProduct: {
        type: DataTypes.INTEGER
      },
      Color_idColorProducts: {
        type: DataTypes.INTEGER
      },
    };
    let conf = {
      timestamps : false,
      tableName : "products_has_color"
    }
    const ProductsHasColor = sequelize.define(alias , cols, conf );
    
    return ProductsHasColor;
  };
  