var expect = require('chai').expect;

describe("Hook example", function(){
  var foo = false;

  beforeEach(function(done){
    setTimeout(function(){
      foo = true;
      done();
    }, 50);
  });

  it("Global variables should be modified asynchronously", function(){
    expect(foo).to.be.equal(true);
  });
});
