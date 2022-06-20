module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("order", {
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
  });


  // Order.associate = (models) => {
  //   Order.belongsToMany(models.Product, {
  //     as: "product",
  //     foreignKey: "",
  //   });
  // };

  // Order.associate = (models) => {
  //   Order.hasMany(models.User, {
  //     as: "user",
  //     foreignKey: "user_idUsers",
  //   });
  // };
  return Order;
};
