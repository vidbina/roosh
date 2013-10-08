require('chai').should();
require('./app');

var config = require('./package.json').config;
var request = require('superagent');
var host = 'localhost:' + config.port;

describe('Application', function() {
  it('should respond', function(done) {
    // TODO: issue requests w/o specifying the host in the get method 
    // I want a solution that automatically queries to the running app
    request.get(host).end(function(res) {
      res.status.should.equal(200);
      done();
    });
  });
});
