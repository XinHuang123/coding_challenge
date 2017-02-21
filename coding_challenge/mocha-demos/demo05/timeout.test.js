var expect = require('chai').expect;

describe('timeout.test.js', function() {
  it('test should terminate after 5000ms', function(done) {
    var x = true;
    var f = function() {
      x = false;
      expect(x).to.be.not.ok;
      done();
    };
    setTimeout(f, 4000);
  });
});


