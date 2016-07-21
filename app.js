'use strict';

var express = require('express'),
    dancers = require('./mock/dancers.json');

var app = express();

app.set('views', './templates');

app.get('/', function(request, response){
  response.render('index.html')
});
app.get('/blog/:username?', function(request, response){
  var username = request.params.username;
  if  (username === undefined) {
    response.status(503);
    response.send('was not found.')
  } else {
      var dancer = dancers[username] || {};
      response.render('dancer', { dancer: dancer});
  }
})
app.listen(3000, function(){

});
//var router = require("./router.js");

//var http = require("http");
//http.createServer(function (request, response) {
//  router.home(request, response);
//  router.user(request, response);
//}).listen(3000);
//console.log('Server running at http//<LouisvilleECD-url/');

//function printMessage(username) {
//  var message = "Welcome, " + username + ". Let's dance!";
//  console.log(message); }

//var request = http.get("")

//printMessage("Kiorabree");
