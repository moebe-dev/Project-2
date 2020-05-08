module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    name: DataTypes.STRING,
    hire_date: DataTypes.DATE,
    birthday: DataTypes.DATE,
    department: DataTypes.STRING,
    pay: DataTypes.DECIMAL(10,2),
    comments: DataTypes.TEXT
  });
  return Employee;
};


// class User extends Model {}
// User.init({
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });
// sequelize.sync()
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });