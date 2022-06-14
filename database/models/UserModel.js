module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    // idUsers: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primeryKey: true,
    //   allowNull: false,
    // },
    nameUser: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    dni: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  });
  User.associate = (models) => {
    User.hasToMany(models.Rol, {
      as: "rol",
      foreignKey: "rol_idrol",
    });
  };
  return User;
};
