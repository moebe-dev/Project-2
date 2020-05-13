$(document).ready(function() {
    $.get("/api/employees/anniversary", function(data) {
      for (let i = 0; i < data.length; i++) { 
        console.log("employees anni returned: ", data[i].firstName);
  
         // Create the new row
         var newRow = $("<tr>").append(
          $("<td>").text(data[i].firstName),
          $("<td>").text(data[i].lastName),
          $("<td>").text(data[i].hireDateMonth),
          $("<td>").text(data[i].hireDateDay),
          $("<td>").text(data[i].hireDateYear)
        );
  
        // Append the new row to the table
        $("#anniversaries").append(newRow);
  
      }
    });
  
    $.get("/api/employees/birthday", function(data) {
      for (let i = 0; i < data.length; i++) {
      console.log("employees bday returned: ", data[i]);
  
      // Create the new row
      var newRow = $("<tr>").append(
        $("<td>").text(data[i].firstName),
        $("<td>").text(data[i].lastName),
        $("<td>").text(data[i].birthdayMonth),
        $("<td>").text(data[i].birthdayDay),
        $("<td>").text(data[i].birthdayYear)
      );
  
      // Append the new row to the table
      $("#birthdays").append(newRow);
      }
    });
  });