// eslint-disable-next-line prettier/prettier
module.exports = function (sequelize, DataTypes) {
  var Accounts = sequelize.define("Accounts", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Accounts;
};

// CREATE TABLE `users` (
//     `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
//     `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
