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
var initial_email = 'example@example.com';
var initial_rate = 2500;
var initial_billed = 100000;

var current_name = initial_name;
var current_email = initial_email;
var current_rate = initial_rate;
var current_billed = initial_billed;