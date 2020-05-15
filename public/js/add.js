// Name reference variables.
var $firstName = $("#firstName");
var $lastName = $("#lastName");

// Hire Date reference variables.
var $hireDay = $("#hireDay");
var $hireMonth = $("#hireMonth");
var $hireYear = $("#hireYear");

// Birthday reference variables.
var $birthDay = $("#birthDay");
var $birthMonth = $("#birthMonth");
var $birthYear = $("#birthYear");

// Miscellaneous Form reference variables.
var $department = $("#department");
var $pay = $("#pay");
var $comments = $("#comments");

var $submitBtn = $("#submit");
var $employeeList = $("#employee-list");

// The API object contains methods for each kind of requests.
var API = {
  addEmployee: function(record) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/employees",
      data: JSON.stringify(record)
    });
  },
  getEmployees: function() {
    return $.ajax({
      url: "api/employees",
      type: "GET"
    });
  },
  deleteEmployee: function(id) {
    return $.ajax({
      url: "api/employees/" + id,
      type: "DELETE"
    });
  }
};

// HandleFormSubmit is called whenever we submit a new example.
// Save the new example to the db and refresh the list.
var handleFormSubmit = function(event) {
  event.preventDefault();

  var employee = {
    firstName: $firstName.val().trim(),
    lastName: $lastName.val().trim(),
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

  API.addEmployee(employee).then(function() {});
  // First Name, Last Name
  $("#firstName").val("");
  $("#lastName").val("");
  // Hire
  $("#hireDay").val("");
  $("#hireMonth").val("");
  $("#hireYear").val("");
  // Birth
  $("#birthDay").val("");
  $("#birthMonth").val("");
  $("#birthYear").val("");
  // Departments, Pay, Comments
  $("#department").val("");
  $("#pay").val("");
  $("#comments").val("");
};

// HandleDeleteBtnClick is called when an employee's delete button is clicked.
// Remove the employee from the db and refresh the list.
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteEmployee(idToDelete).then(function() {});
};

// Add event listeners to the submit , get info and delete buttons.
$submitBtn.on("click", handleFormSubmit);
$employeeList.on("click", ".delete", handleDeleteBtnClick);
