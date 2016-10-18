//test game.js

var tomFoolery = require('../src/js/game');
var chai = require('chai');
var assert = chai.assert;

describe('tomFoolery', function() {
  context('Creating new instance of tomFoolery', function() {
    it('Is a new instance of tomFoolery', function() {
      assert.instanceOf(new tomFoolery(), tomFoolery, 'tomFoolery is an instance of game.');
    });
  });

  context('Has property test', function() {
    it('has property of test', function() {
      assert.property(new tomFoolery(), 'test', 'tomFoolery has a test property.');
    });
  });
});
