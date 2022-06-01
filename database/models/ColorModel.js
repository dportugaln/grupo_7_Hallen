module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define("color", {
    idColorProducts: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primeryKey: true,
      allowNull: false,
    },
    nameColor: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });
};
