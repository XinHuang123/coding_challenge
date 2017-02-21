var expect = require('chai').expect;

describe('beforeEach示例', function() {
  var foo = false;

  beforeEach(function() {
    foo = true;
  });

  it('Global variable modifications should be successful', function() {
    expect(foo).to.be.equal(true);
  });
});
