$(document).ready(function() {
  $("#register").on("submit", function(event) {
    event.preventDefault();

    // capturing input data from form to create new user
    var newAccount = {
      email: $("#register [name=newUsername]")
        .val()
        .trim(),
      password: $("#register [name=newPassword]")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/signup", {
      type: "POST",
      data: newAccount
    }).then(function() {
      console.log("created new user");
      location = "/login";
    });
  });
});
