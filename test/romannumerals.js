//test romannumerals

var romanNumerals = require('../src/js/romannumerals');
var chai = require('chai');
var assert = chai.assert;

describe('romanNumerals', function() {

  context('When passing in the number 1', function() {
    it('Returns I for 1', function() {
      // assert.equal([return value],[expected result],[message]);
      assert.equal(romanNumerals(1),"I","Roman Numberal I for 1.");
    });//end of first it
  });//end of first context

  context('When passing in the number 2', function() {
    it('Returns II for 2', function() {
      // assert.equal([return value],[expected result],[message]);
      assert.equal(romanNumerals(2),"II","Roman Numberal II for 2.");
    });//end of second it
  });//end of second context

  // context('When passing in the number 4', function() {
  //   it('Returns IV for 4', function() {
  //     // assert.equal([return value],[expected result],[message]);
  //     assert(romanNumerals(4) === "IV","Roman Numberal IV for 4.");
  //   });//end of third it
  // });//end of third context

});//end of describe
