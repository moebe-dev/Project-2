$(document).ready(function() {
  $(".update-name").empty();

  //adding an initial dropdown option with instructions
  var editContentOptionBlank = $("<option></option>");
  editContentOptionBlank.attr("value", "Select Employee to Edit");
  editContentOptionBlank.text("Select Employee to Edit");

  $(".update-name").append(editContentOptionBlank);

  $.get("/api/employees", function(data) {
    for (let i = 0; i < data.length; i++) {
      // console.log("employees data update js: ", data[i].firstName + data[i].lastName);

      var editContentOption = $("<option></option>");
      editContentOption.attr({
        label: data[i].firstName + data[i].lastName,
        value: data[i].firstName + data[i].lastName,
        "data-selected": data[i].firstName + data[i].lastName,
        "data-id-delete": data[i].id,
      });
      editContentOption.text(data[i].firstName + " " + data[i].lastName);

      $(".update-name").append(editContentOption);
    }
  });

  //to capture id of dropdown option selected and storing the id to the edit button for each time it's selected
  $("select.update-name").change(function() {
    var buttonValue = $("select.update-name")
      .find(":selected")
      .attr("data-id-delete");
    $(".update").attr("id", buttonValue);
    $(".delete").attr("id", buttonValue);
  });

  $(".delete").on("click", function() {
    event.preventDefault();

    var id = $(this).attr("id");

    $.ajax({
      method: "DELETE",
      url: "/api/employees/" + id,
    }).then(function() {
      console.log("record deleted");
      location.reload();
    });
  });

  //Name reference variables
  // var $firstName = $("#firstName");
  // var $lastName = $("#lastName");/

  //Hire Date reference variables
  var $hireDay = $("#hireDay");
  var $hireMonth = $("#hireMonth");
  var $hireYear = $("#hireYear");

  //Birthday reference variables
  var $birthDay = $("#birthDay");
  var $birthMonth = $("#birthMonth");
  var $birthYear = $("#birthYear");

  //Miscellaneous Form reference variables
  var $department = $("#department");
  var $pay = $("#pay");
  var $comments = $("#comments");

  $(".update").on("click", function() {
    event.preventDefault();

    var id = $(this).attr("id");

    var employee = {
      // firstName: $firstName.val().trim(),
      // lastName: $lastName.val().trim(),
      hireDateYear: $hireYear.val().trim(),
      hireDateMonth: $hireMonth.val().trim(),
      hireDateDay: $hireDay.val().trim(),
      birthdayYear: $birthYear.val().trim(),
      birthdayMonth: $birthMonth.val().trim(),
      birthdayDay: $birthDay.val().trim(),
      department: $department.val().trim(),
      pay: parseFloat($pay.val().trim()),
      comments: $comments.val().trim(),
    };

    $.ajax({
      url: "api/employeeUpdate/" + id,
      type: "PUT",
      data: employee,
    }).then(function() {
      console.log("updated");
    });
  });
});
