var http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.end("Hello");
}).listen(3000);
console.log('Server running at http//');

//function printMessage(username) {
//  var message = "Welcome, " + username + ". Let's dance!";
//  console.log(message); }

//var request = http.get("")

//printMessage("Kiorabree");
