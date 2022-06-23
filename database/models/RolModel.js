module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define("Rol", {
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

  Rol.associate = (models) => {
    Rol.belongsTo(models.User, {
      as: "User",
      foreignKey: "rol_idrol",
    });
  };
  return Rol;
};
