module.exports = (sequelize, DataTypes) => {
  const Size = sequelize.define("size", {
    idSize: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primeryKey: true,
      allowNull: false,
    },
    nameSize: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });
};
