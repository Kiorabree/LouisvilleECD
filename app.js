'use strict';

var express = require('express');
var mongoose = require('mongoose');

var parser = require('body-parser');
var dancers = require('mock/dancers.json');

var app = express();

app.use('/', express.static("/workfiles"));
app.use(parser.json());

mongoose.connect('mongodb://localhost/dancers');

var Schema = new mongoose.Schema;
var dancerSchema = new Schema({
    first: String,
    last: String,
    email: String
  });

var Dancer = mongoose.model('Dancer', dancerSchema);

app.get('/dancers', function(request, response) { Dancer.find(function(err, dancers) {
  if (err)
    response.send(err)
  response.json(dancers)
  });
});

app.post('/dancers', function(request, response) {
  Dancers.create( {
    first: req.body.first, last: req.body.last, email: req.body.email }, function(err, dancers) { if (err)
      response.send(err);

  Dancer.find(function(err, dancers) {
    if (err)
      response.send(err)
    response.json(dancers);
    });
  });
});

app.listen(3000);
console.log("Listening on port 3000");

app.get('/', function(request, response) {
  response.sendfile('/workfiles/dancers.html');
});
