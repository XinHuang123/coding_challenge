var add = require('../src/add.js');
var expect = require('chai').expect;

describe('add function test', function() {
  it('1+1 should equal to 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('any number plus 0 should equal to itself', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
});
