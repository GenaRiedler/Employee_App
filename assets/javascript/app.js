//Code to initialize Firebase. This is Mateo's personal firebase config.
var config = {

  apiKey: "AIzaSyAZf8vAIUEY1lO2MJig6tGLJQeYlcbppqA",
  authDomain: "my-demo-ae059.firebaseapp.com",
  databaseURL: "https://my-demo-ae059.firebaseio.com",
  projectId: "my-demo-ae059",
  storageBucket: "my-demo-ae059.appspot.com",
  messagingSenderId: "1049567964784"

};

//Initializes Firebase using the configuration from Mateo
firebase.initializeApp(config);

//Initialized variables for use through
var database = firebase.database();
var current_name = "";
var current_role = "";
var start_date = "";
var current_rate = "";

//Gives each employee row and unique id.
var employee_count = -1;

//Event listener that runs function upon clicking submit.
$('#add-emp').on('click', function(){

  //Prevents the page from reloading.
  event.preventDefault();

  //Gets the inputted values for the employees from the form and increments
  //employee count.
  current_name = $('#name-input').val();
  current_role = $('#role-input').val();
  start_date = $('#date-input').val();
  current_rate = $('#rate-input').val();
  employee_count++;

  //Pushes the individual entry to the database. Push adds it as one 
  //item with a single unique id.
  database.ref().push({

    name: current_name,
    role: current_role,
    start_date: start_date,
    rate: current_rate,
    employee_count: employee_count

  });
});

//Displays the new employee upon being added. Takes only a snapshot of the 
//added child.
database.ref().on('child_added', function(child_snapshot){

  //Gets the snapshot values.
  current_name = child_snapshot.val().name;
  current_role = child_snapshot.val().role;
  start_date = child_snapshot.val().start_date;
  current_rate = child_snapshot.val().rate;

  //Creates the table row
  var table_row = $('<tr>');
  table_row.attr('id', employee_count);

  //Creates the name column.
  var name_col = $('<td>').text(current_name);
  name_col.attr('id', 'name');
  table_row.append(name_col);

  //Creates the role column.
  var role_col = $('<td>').text(current_role);
  role_col.attr('id', 'role');
  table_row.append(role_col);

  //Creates the start date column.
  var start_date_col = $('<td>').text(start_date);
  start_date_col.attr('id', 'start date');
  table_row.append(start_date_col);

  //Creates the months worked column.
  var months_worked = Date.now() - start_date;
  var months_worked_col = $('<td>').text(months_worked);
  months_worked_col.attr('id', 'months worked');
  table_row.append(months_worked_col);

  //Creates the Monthy Rate column.
  var rate_col = $('<td>').text(current_rate);
  rate_col.attr('id', 'rate');
  table_row.append(rate_col);

  //Creates the total billed column.
  var total_billed = current_rate * months_worked;
  var total_billed_col = $('<td>').text(total_billed);
  total_billed_col.attr('id', 'total billed');
  table_row.append(total_billed_col);

  //Appends entire row to the table.
  $('#emp-table').append(table_row);

}, function(errorObject){

    console.log("The read failed: " + errorObject.code);

});