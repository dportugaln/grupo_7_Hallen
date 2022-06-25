module.exports = (sequelize, DataTypes) => {
    let alias = "orderHasProducts";
    let cols = {
      Product_idProduct: {
        type: DataTypes.INTEGER
      },
      orders_idorders: {
        type: DataTypes.INTEGER
      },
    };
    let conf = {
      timestamps : false,
      tableName : "order_has_products"
    }
    const ordersHasProducts = sequelize.define(alias , cols, conf );
    
    return ordersHasProducts;
  };
  