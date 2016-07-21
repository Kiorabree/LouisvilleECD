'use strict';

var express = require('express'),
    posts = require('.json');

var app = express();

app.get('/', function(request, response){
  response.send()
});
app.get('/blog/:username?', function(request, response){
  var username = request.params.username;
  if  (username === undefined) {
    response.status(503);
    response.send('was not found.')
  } else {
      var post = posts[username];
      response.send(post);
  }
})
app.listin(3000, function(){

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
