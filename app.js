var router = require("./router.js");

var http = require("http");
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running at http//<LouisvilleECD-url/');

//function printMessage(username) {
//  var message = "Welcome, " + username + ". Let's dance!";
//  console.log(message); }

//var request = http.get("")

//printMessage("Kiorabree");
