var app_fireBase = {};
(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyClY6sbmhqdDu6GlUfjobh7oxUnr-orAp0",
    authDomain: "prime-trade.firebaseapp.com",
    databaseURL: "https://prime-trade.firebaseio.com",
    projectId: "prime-trade",
    storageBucket: "prime-trade.appspot.com",
    messagingSenderId: "214293197188",
    appId: "1:214293197188:web:85d1feb6c54f877cdd2dd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_fireBase - firebase;

})()

var  objPeople = [
  {
    username:"Jeff",
    password:"FL2000"
  },

  {
    username:"JP",
    password:"FL2000"
  },

  {
    username:"Gus",
    password:"FL2000"
  },

  {
    username:"Sila",
    password:"FL2000"
  },

  {
    username:"Jeff",
    password:"FL2000"
  }
]

function getInfo() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value

  for(i=0; i < objPeople.length; i++) {
    if(username == objPeople[i].username && password == objPeople[i].password) {
      console.log(username + "is logged in!!!")


    }

  }


}