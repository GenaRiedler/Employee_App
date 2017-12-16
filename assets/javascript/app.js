//  START CODING BELOW!!
// Initialize Firebase
var config = {

  apiKey: "AIzaSyAZf8vAIUEY1lO2MJig6tGLJQeYlcbppqA",
  authDomain: "my-demo-ae059.firebaseapp.com",
  databaseURL: "https://my-demo-ae059.firebaseio.com",
  projectId: "my-demo-ae059",
  storageBucket: "my-demo-ae059.appspot.com",
  messagingSenderId: "1049567964784"

};

firebase.initializeApp(config);

var database = firebase.database();
var initial_name = 'Mateo Vargas';
var initial_role = 'Software Developer';
var initial_date = "";
var initial_rate = 100;

var current_name = initial_name;
var current_role = initial_role;
var start_date = initial_date;
var current_rate = initial_rate;

var employee_count = -1;

$('#add-emp').on('click', function(){
  event.preventDefault();

  // YOUR TASK!!!

  // Code in the logic for storing and retrieving the most recent user.
  current_name = $('#name-input').val();
  current_role = $('#role-input').val();
  start_date = $('#date-input').val();
  current_rate = $('#rate-input').val();
  employee_count++;

  database.ref().push({

    name: current_name,
    role: current_role,
    start_date: start_date,
    rate: current_rate,
    employee_count: employee_count

  });
});

database.ref().on('child_added', function(child_snapshot){

  current_name = child_snapshot.val().name;
  current_role = child_snapshot.val().role;
  start_date = child_snapshot.val().start_date;
  current_rate = child_snapshot.val().rate;

  var table_row = $('<tr>');
  table_row.attr('id', employee_count);

  var name_col = $('<td>').text(current_name);
  name_col.attr('id', 'name');
  table_row.append(name_col);

  var role_col = $('<td>').text(current_role);
  role_col.attr('id', 'role');
  table_row.append(role_col);

  var start_date_col = $('<td>').text(start_date);
  start_date_col.attr('id', 'start date');
  table_row.append(start_date_col);

  var months_worked = Date.now() - start_date;
  var months_worked_col = $('<td>').text(months_worked);
  months_worked_col.attr('id', 'months worked');
  table_row.append(months_worked_col);

  var rate_col = $('<td>').text(current_rate);
  rate_col.attr('id', 'rate');
  table_row.append(rate_col);

  var total_billed = current_rate * months_worked;
  var total_billed_col = $('<td>').text(total_billed);
  total_billed_col.attr('id', 'total billed');
  table_row.append(total_billed_col);

  $('#emp-table').append(table_row);

}, function(errorObject){

    console.log("The read failed: " + errorObject.code);

});