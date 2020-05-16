/* eslint-disable prettier/prettier */
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  // Load landing page: if user is signed-in to the session already, user will be redirected to dashboard page
  app.get("/", function (req, res) {
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "../public/html/landing.html"));
    }
  });

  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "../public/html/login.html"));
    }
  });

  app.get("/register", function (req, res) {
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "../public/html/register.html"));
    }
  });

  // Once user is signed-in and authenticated, the user will be redirected to dashboard page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));
  });

  app.get("/add", function (req, res) {
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/html/add.html"));
    } else {
      res.redirect("/");
    }
  });

  app.get("/update", function (req, res) {
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/html/update.html"));
    } else {
      res.redirect("/");
    }
  });

  /* eslint-disable-next-line prettier/prettier */
  app.get("/dashboard", function (req, res) {
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));
    } else {
      res.redirect("/");
    }
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendStatus(404);
  });
};
