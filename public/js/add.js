// Get references to page elements
// Might need to change ID's based on front end

var $name = $("#name");
var $hireDate = $("#hireDate");
var $birthday = $("#birthday");
var $department = $("#department");
var $pay = $("#pay");
var $comments = $("#comments");

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
};

// refreshEmployees gets new employees from the db and repopulates the list
// var refreshEmployees = function() {
//   API.getEmployees().then(function(data) {
//     var $employee = data.map(function(employee) {
//       var $a = $("<a>")
//         .text(employee.text)
//         .attr("href", "/employees/" + employee.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": employee.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($employee);
//   });
// };

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
  /*
  
    name: DataTypes.STRING,
    hire_date: DataTypes.DATE,
    birthday: DataTypes.DATE,
    department: DataTypes.STRING,
    pay: DataTypes.DECIMAL(10,2),
    comments: DataTypes.TEXT*/

  if (!(employee.name && employee.hire_date)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.addExample(employee).then(function() {
    refreshExamples();
  });

  $("#name").val("");
  $("#hireDate").val("");
  $("#birthday").val("");
  $("#department").val("");
  $("#pay").val("");
  $("#comments").val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
