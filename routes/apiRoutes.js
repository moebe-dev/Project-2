/* eslint-disable prettier/prettier */
var db = require("../models");


module.exports = function(app) {
  // Get all Employees
  app.get("/api/employees", function(req, res) {
    db.Employee.findAll({}).then(function(employees) {
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
};
