var fetch = require('node-fetch');
var expect = require('chai').expect;

describe('promise.test.js', function() {
  it('async request should return an object', function() {
    return fetch('https://api.github.com')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        expect(json).to.be.an('object');
      });
  });
});
