module.exports = (sequelize, DataTypes) => {
    let alias = "ProductsHasSize";
    let cols = {
      Product_idProduct: {
        type: DataTypes.INTEGER
      },
      Size_idSize: {
        type: DataTypes.INTEGER
      },
    };
    let conf = {
      timestamps : false,
      tableName : "products_has_size"
    }
    const ProductsHasSize = sequelize.define(alias , cols, conf );
    
    return ProductsHasSize;
  };
  