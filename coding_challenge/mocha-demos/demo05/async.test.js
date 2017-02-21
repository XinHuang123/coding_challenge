var request = require('superagent');
var expect = require('chai').expect;

describe('async.test.js', function() {
  it('async request should return an object', function(done){
    request
      .get('https://api.github.com')
      .end(function(err, res){
        expect(res).to.be.an('object');
        done();
      });
  });
});
