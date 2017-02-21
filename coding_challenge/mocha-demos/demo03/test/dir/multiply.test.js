var multiply = require('../../src/multiply');
var expect = require('chai').expect;

describe('multiplication function test', function() {
  it('1*1 should equal to 1', function() {
    expect(multiply(1, 1)).to.be.equal(1);
  });
})
