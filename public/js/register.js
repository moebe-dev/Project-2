$(document).ready(function() {
  $("#register").on("submit", function(event) {
    event.preventDefault();
    // Capturing input data from form to create new user.
    var newAccount = {
      email: $("#register [name=newUsername]")
        .val()
        .trim(),
      password: $("#register [name=newPassword]")
        .val()
        .trim()
    };

    // Sends the POST request.
    $.ajax("/api/signup", {
      type: "POST",
      data: newAccount
    }).then(function() {
      location = "/login";
    });
  });
});
