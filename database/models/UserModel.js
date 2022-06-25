module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let cols = {
    idUsers: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
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
      type: DataTypes.DATE
    },
    sex: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }
  let conf = {
    timestamps: false,
    tableName: "users",
  };
  const User = sequelize.define( alias, cols, conf );

  User.associate = (models) => {
    User.belongsTo(models.Rol, {
      as: "Rol",
      foreignKey: "rol_idrol",
    });
  };

  User.associate = (models) => {
    User.belongsTo(models.Order, {
      as: "Order",
      foreignKey: "user_idUsers",
    });
  };
  return User;
};
