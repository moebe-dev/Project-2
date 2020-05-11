$(document).ready(function() {
  $("#login").on("submit", function(event) {
    event.preventDefault();

    // capturing input data from form to check user credentials
    var user = {
      email: $("#login [name=username]")
        .val()
        .trim(),
      password: $("#login [name=password]")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/login", {
      type: "POST",
      data: user
    }).then(function() {
      console.log("logged in");
      // Reload the page to get the updated list
      location = "/members";
    });
  });
});
