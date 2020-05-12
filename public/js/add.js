// Get references to page elements
// Might need to change ID's based on front end

var $name = $("#name");
var $hireDate = $("#hireDate");
var $birthday = $("#birthday");
var $department = $("#department");
var $pay = $("#pay");
var $comments = $("#comments");

var $submitBtn = $("#submit");
var $employeeList = $("#employee-list");

// The API object contains methods for each kind of request we'll make
var API = {
  addEmployee: function(record) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/employees",
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

  //create route for one specific employee
};

//refreshEmployees gets new employees from the db and repopulates the list

var refreshEmployees = function() {
  API.getEmployees().then(function(data) {
    var $employee = data.map(function(employee) {
      var $a = $("<a>")
        .text(employee.name)
        .attr("href", "/employees/" + employee.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": employee.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-info float-right info")
        .text("Employee Info");

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $employeeList.empty();
    $employeeList.append($employee);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var employee = {
    name: $name.val().trim(),
    hireDate: $hireDate.val().trim(),
    birthday: $birthday.val().trim(),
    department: $department.val().trim(),
    pay: parseFloat($pay.val().trim()),
    comments: $comments.val().trim()
  };

  if (!(employee.name && employee.hire_date)) {
    alert("You must enter an employee name and hire date!");
    return;
  }

  API.addEmployee(employee).then(function() {
    refreshEmployees();
  });

  $("#name").val("");
  $("#hireDate").val("");
  $("#birthday").val("");
  $("#department").val("");
  $("#pay").val("");
  $("#comments").val("");
};

// handleDeleteBtnClick is called when an employee's delete button is clicked
// Remove the employee from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteEmployee(idToDelete).then(function() {
    refreshEmployees();
  });
};

// Get info of one specific employee
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteEmployee(idToDelete).then(function() {
//     refreshEmployees();
//   });
// };

// Add event listeners to the submit , get info and delete buttons
$submitBtn.on("click", handleFormSubmit);
$employeeList.on("click", ".delete", handleDeleteBtnClick);

//Work on get info logic
//$employeeList.on("click", ".info", handleDeleteBtnClick);
