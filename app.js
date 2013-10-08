var express = require('express');
var app = express();
var config = require('./package.json').config;

app.get('/', function(req, res) {
  res.send('Roosh!');
});

app.get('/restrooms', function(req, res) {
  // TODO: return list of restrooms
});

app.put('/restrooms', function(req, res) {
  // TODO: update restroom data, like ratings
});

app.post('/restrooms', function(req, res) {
  // TODO: add new restroom
});

app.delete('/restrooms', function(req, res) {
  // TODO: remove restroom
});

app.listen(config.port);
