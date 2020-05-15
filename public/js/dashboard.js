$(document).ready(function() {
  $.get("/api/employees/anniversary", function(data) {
    for (let i = 0; i < data.length; i++) {
      var newRow = $("<tr>").append(
        $("<td>").text(data[i].firstName),
        $("<td>").text(data[i].lastName),
        $("<td>").text(data[i].hireDateMonth),
        $("<td>").text(data[i].hireDateDay),
        $("<td>").text(data[i].hireDateYear)
      );
      // Appends the new row to the table.
      $("#anniversaries").append(newRow);
    }
  });

  $.get("/api/employees/birthday", function(data) {
    for (let i = 0; i < data.length; i++) {
      // Creates the new row.
      var newRow = $("<tr>").append(
        $("<td>").text(data[i].firstName),
        $("<td>").text(data[i].lastName),
        $("<td>").text(data[i].birthdayMonth),
        $("<td>").text(data[i].birthdayDay),
        $("<td>").text(data[i].birthdayYear)
      );
      // Appends the new row to the table.
      $("#birthdays").append(newRow);
    }
  });
});
