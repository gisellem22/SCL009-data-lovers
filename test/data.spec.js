global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('pokemonFilter', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof pokemonFilter, 'object');
  });

  describe('pokemonFilter'.byName, () => {
  
    it('debería ser una función', () => {
      assert.equal(typeof pokemonFilter.byName, 'function');
    });
  });
 });
