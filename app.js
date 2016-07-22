'use strict';

var express = require('express');
var mongoose = require('mongoose');

var parser = require('body-parser');
var dancers = require('mock/dancers.json');

var app = express();

app.use('/', express.static("workfiles"));
app.use(parser.json());

mongoose.connect('mongodb://localhost/dancers.js');

var Schema = new mongoose.Schema;
var dancerSchema = new Schema({
    first: String,
    last: String,
    email: String
  });

var Dancer = mongoose.model('Dancer', dancerSchema);

app.get('/', function(request, response){
response.render('index.html')
});
app.get('/dancers/:email', function(request, response){
  var email = request.params.email;
  if  (email === undefined) {
response.status(503);
response.send('Contact was not found.')
} else {
  var email = dancers[email];
response.render();
}
});

app.post('/dancers', function (request, response) {
  var dancer = request.body;
  Dancer.save(dancer, function(err, dancer) {
});

app.listen(3000, function() {
});
