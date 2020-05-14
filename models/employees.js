// ESLint-disable-next-line prettier/prettier
module.exports = function (sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hireDateYear: DataTypes.INTEGER,
    hireDateMonth: DataTypes.INTEGER,
    hireDateDay: DataTypes.INTEGER,
    birthdayYear: DataTypes.INTEGER,
    birthdayMonth: DataTypes.INTEGER,
    birthdayDay: DataTypes.INTEGER,
    department: DataTypes.STRING,
    pay: DataTypes.DECIMAL(10, 2),
    comments: DataTypes.TEXT
  });
  return Employee;
};
