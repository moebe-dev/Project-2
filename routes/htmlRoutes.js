var path = require("path");
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/home.html"))
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/add.html"))
  });

  app.get("/update", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/update.html"))
  });

  app.get("/dashboard", function(req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
      res.sendFile(path.join(__dirname, "../public/html/dashboard.html"))
    // });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    // res.render("404");
  });
};
