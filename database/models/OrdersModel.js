module.exports = (sequelize, DataTypes) => {
  let alias = "Order";
  let cols = {
    idorders: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
    },
    total_price: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_idUsers: {
      type: DataTypes.INTEGER,
    },
  };
  let conf = {
    timestamps: false,
    tableName: "orders",
  };
  const Order = sequelize.define(alias, cols, conf);

  Order.associate = (models) => {
    Order.belongsToMany(models.Product, {
      as: "Product",
      through: "orders_has_products",
      foreignKey: "orders_idorders",
      otherKey: "Product_idProduct",
    });

    Order.hasMany(models.User, {
      as: "User",
      foreignKey: "user_idUsers",
    });
  };
  return Order;
};
