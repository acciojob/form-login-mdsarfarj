function getFormvalue() {
  var form = document.getElementById("form1");

    // Access the input values using their names
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Display the values using alert
    alert(firstName + " " + lastName);

    // Prevent the default form submission
    return false;
}
