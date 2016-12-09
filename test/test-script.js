const chai = require('chai');
const Zombies = require('../zombies.js');

chai.should();

describe('Item', ()=> {

  let item;

  beforeEach(()=>{
    item = new Zombies.item('testName');
  });

  it('should be a class', ()=>{
    item.should.be.a.function;
  });

  it('should have a name', ()=>{
    item.should.have.property('name');
  });

});