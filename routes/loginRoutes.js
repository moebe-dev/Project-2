var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/login", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/login.html"))
  });



  // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
    // res.render("404");
//   });
};
