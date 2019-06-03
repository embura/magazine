module.exports = (sequelize, DataType) => {
  const Users = sequelize.define('User', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataType.STRING(30),
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    department: {
      type: DataType.STRING(50),
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Users;
};
