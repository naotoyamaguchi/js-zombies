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
    weapon = new Zombies.weapon('Katana', 100);
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

  it('should be an instance of item', ()=> {
    weapon.should.be.an.instanceof(Zombies.item);
  });

  it('the weapon name should be first parameter', ()=>{
    let crossbow = new Zombies.weapon('crossbow', 100);
    crossbow.name.should.equal('crossbow');
  });
});

describe('Food', ()=>{
  let food;

  beforeEach(()=>{
    food = new Zombies.food('Apple', 50);
  });

  it('should have a property name', ()=>{
    food.should.have.a.property('name');
  });

  it('should have a property energy', ()=>{
    food.should.have.a.property('energy');
  });

  it('energy property should be a number', ()=>{
    food.energy.should.be.a('number');
  });

  it('should be an instance of item', ()=> {
    food.should.be.an.instanceof(Zombies.item);
  });
});

describe('Player', ()=>{
  let player;

  beforeEach(()=>{
    player = new Zombies.player('Naoto', 100, 25, 25);
  });

  it('should have a property name', ()=>{
    player.should.have.a.property('name');
  });

  it('should have a property health', ()=>{
    player.should.have.a.property('health');
  });

  it('health property should be a number', ()=>{
    player.health.should.be.a('number');
  });
});