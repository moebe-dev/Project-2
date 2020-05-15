// eslint-disable-next-line prettier/prettier
module.exports = function (sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true
    },
    hireDateYear: {
      type: DataTypes.INTEGER
    },
    hireDateMonth: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      min: 1,
      max: 12
    },
    hireDateDay: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      min: 1,
      max: 31
    },
    birthdayYear: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      min: 1940,
      max: 2020
    },
    birthdayMonth: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      min: 1,
      max: 12
    },
    birthdayDay: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      min: 1,
      max: 31
    },
    department: DataTypes.STRING(30),
    pay: DataTypes.DECIMAL(10, 2),
    comments: DataTypes.TEXT
  });
  return Employee;
};
