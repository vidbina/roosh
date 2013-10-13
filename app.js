var express = require('express');
var app = express();
var config = require('./package.json').config;
var credentials = require('./credentials.json');
var mongoose = require('mongoose');

if (credentials.mongolab) {
  mongoose.connect(
    'mongodb://' + 
      credentials.mongolab.user + ':' + credentials.mongolab.password + 
      '@' + credentials.mongolab.path);
}

var restroomSchema = mongoose.Schema({
  name: String,
  rating: Number,
  organization: String,
  url: String
});
var Restroom = mongoose.model('Restoom', restroomSchema);
//console.log(Restroom);

/*var test = new Restroom({
  name: "Winkelcentrum Zuidplein", 
    rating: 5, 
    organization: "vendor",
    url: "http://www.zuidplein.nl/winkel/150/9/i/vendor-public-washrooms-toiletten"
});
test.save(function(err, success) {
  if(err) {
    console.log("We failed with " + err);
  } else {
    console.log("We succeeded with");
    console.log(success);
  }
})*/

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
