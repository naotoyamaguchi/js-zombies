// jshint esversion: 6

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

  it('should have a property name', ()=>{
    item.should.have.property('name');
  });

  it('property name should be a string', ()=>{
    item.name.should.be.a('string');
  });

});

describe('Weapon', ()=> {
  let weapon;

  beforeEach(()=>{
    weapon = new Zombies.weapon('weaponName', 10);
  });

  it('should be a class', ()=>{
    weapon.should.be.a.function;
  });

  it('should have a property name', ()=>{
    weapon.should.have.a.property('name');
  });

  it('should have property damage', ()=>{ 
    weapon.should.have.a.property('damage');
  });

  it('damage property should be a number', ()=> {
    weapon.damage.should.be.a('number');
  });
});

