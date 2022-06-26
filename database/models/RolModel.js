module.exports = (sequelize, DataTypes) => {
  let alias = "Rol";
  let cols = {
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
  }
  let conf = {
    timestamps: false,
    tableName: "rol",
  };
  const Rol = sequelize.define(alias, cols, conf);

  // Rol.associate = (models) => {
  //   Rol.hasMany(models.User, {
  //     as: "User",
  //     foreignKey: "rol_idrol",
  //   });
  // };
  return Rol;
};
