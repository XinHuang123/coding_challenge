var expect = chai.expect;

describe('add function test', function() {
  it('1+1 should equal to 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('any number adds 0 shoudl equal to itself', function() {
    expect(add(1, 0)).to.be.equal(1);
    expect(add(0, 0)).to.be.equal(0);
  });
});
