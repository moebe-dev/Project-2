/* eslint-disable prettier/prettier */
var db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {
  // Get all Employees
  app.get("/api/employees", function(req, res) {
    db.Employee.findAll({}).then(function(employees) {
      // console.log("employees: ", employees[0].dataValues);
      res.json(employees);
    });
  });

  app.get("/api/employees/anniversary", function(req, res) {
    db.Employee.findAll({
      order: [
        ["hireDateMonth", "ASC"],
        ["hireDateDay", "ASC"],
        ["lastName", "ASC"],
        ["firstName", "ASC"]
      ]
    }).then(function(employees) {
      for (let i = 0; i < employees.length; i++) { 
        // console.log("employees anni returned: ", employees[i].dataValues);
      }
      res.json(employees);
    });
  });

  app.get("/api/employees/birthday", function(req, res) {
    db.Employee.findAll({
      order: [
        ["birthdayMonth", "ASC"],
        ["birthdayDay", "ASC"],
        ["lastName", "ASC"],
        ["firstName", "ASC"]
      ]
    }).then(function(employees) {
      for (let i = 0; i < employees.length; i++) {
        // console.log("employees bday returned: ", employees[i].dataValues);
        }
      res.json(employees);
    });
  });

  // Create a new employee
  app.post("/api/employees", function(req, res) {
    db.Employee.create(req.body).then(function(record) {
      res.json(record);
    });
  });

  // Delete an employee by id
  app.delete("/api/employees/:id", function(req, res) {
    db.Employee.destroy({ where: { id: req.params.id } }).then(function(record) {
      res.json(record);
    });
  });


  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.redirect("/members");
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
