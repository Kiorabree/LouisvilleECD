'use strict';

var express = require('express');
var parser = require('body-parser');
var dancers = require('mock/dancers.json');

var app = express();

app.use('/', express.static("workfiles"));
app.use(parser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dancers');

var dancerSchema = new mongoose.Schema({
    first: String,
    last: String,
    email: String
  });

var model = mongoose.model('Dancer', dancerSchema);

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
  Dancer.create(dancer, function(err, dancer) {
    if(err) {
      return response.status(500).json({err: err.message});
    }
    response.json({'dancer': dancer, message: 'Dancer Added');
  })
});

app.listen(3000, function() {
});
