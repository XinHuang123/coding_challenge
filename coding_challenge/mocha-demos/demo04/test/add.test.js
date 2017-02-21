import add from '../src/add.js';
import chai from 'chai';

let expect = chai.expect;

describe('add function test', function() {
  it('1+1 should equal to 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
