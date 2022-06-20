module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define("rol", {
    idrol: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  });

  // Rol.associate = (models) => {
  //   Rol.belongsTo(models.User, {
  //     as: "user",
  //     foreignKey: "rol_idrol",
  //   });
  // };
  return Rol;
};
