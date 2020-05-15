$(document).ready(function() {
  $("#update-name").empty();

  // Adding an initial dropdown option with instructions.
  var editContentOptionBlank = $("<option></option>");
  editContentOptionBlank.attr("value", "Select Employee to Edit");
  editContentOptionBlank.text("Select Employee to Edit");

  $("#update-name").append(editContentOptionBlank);

  $.get("/api/employees", function(data) {
    for (let i = 0; i < data.length; i++) {
      var editContentOption = $("<option></option>");
      editContentOption.attr({
        label: data[i].firstName + " " + data[i].lastName,
        value: data[i].firstName + " " + data[i].lastName,
        "data-selected": data[i].firstName + data[i].lastName,
        "data-id-delete": data[i].id
      });
      editContentOption.text(data[i].firstName + " " + data[i].lastName);

      $("#update-name").append(editContentOption);
    }
  });

  // Captures the id of dropdown option selected and storing the id to the edit button for each time it's selected.
  $("#update-name").change(function() {
    var buttonValue = $("#update-name")
      .find(":selected")
      .attr("data-id-delete");
    $("#update").attr("data-id", buttonValue);
    $("#delete").attr("data-id", buttonValue);
  });

  $("#delete").on("click", function() {
    event.preventDefault();

    var id = $(this).attr("data-id");

    $.ajax({
      method: "DELETE",
      url: "/api/employees/" + id
    }).then(function() {
      location.reload();
    });
  });

  // Hire Dates reference variables
  var $hireDay = $("#hireDay");
  var $hireMonth = $("#hireMonth");
  var $hireYear = $("#hireYear");

  // Birthday reference variables
  var $birthDay = $("#birthDay");
  var $birthMonth = $("#birthMonth");
  var $birthYear = $("#birthYear");

  // Miscellaneous Form reference variables
  var $department = $("#department");
  var $pay = $("#pay");
  var $comments = $("#comments");

  $("#update").on("click", function() {
    event.preventDefault();

    var id = $(this).attr("data-id");

    var employee = {
      // FirstName: $firstName.val().trim(),
      // LastName: $lastName.val().trim(),
      hireDateYear: $hireYear.val().trim(),
      hireDateMonth: $hireMonth.val().trim(),
      hireDateDay: $hireDay.val().trim(),
      birthdayYear: $birthYear.val().trim(),
      birthdayMonth: $birthMonth.val().trim(),
      birthdayDay: $birthDay.val().trim(),
      department: $department.val().trim(),
      pay: parseFloat($pay.val().trim()),
      comments: $comments.val().trim()
    };

    $.ajax({
      url: "api/employeeUpdate/" + id,
      type: "PUT",
      data: employee
    }).then(function() {});

    // Name
    $("#update-name").val("");
    // Hire - Day, MOnth, Year
    $("#hireDay").val("");
    $("#hireMonth").val("");
    $("#hireYear").val("");
    // Birth - Day, Month, Year
    $("#birthDay").val("");
    $("#birthMonth").val("");
    $("#birthYear").val("");
    // Department, Pay, Comments
    $("#department").val("");
    $("#pay").val("");
    $("#comments").val("");
  });
});
