global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ]
}];

describe('pokemonData', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof pokemonData, 'object');
  });

  describe('pokemonData.filterData', () => {
    
    it('debería ser una función', () => {
      assert.equal(typeof window.pokemonData.filterData, 'function');
    });

    it('debería retornar el objeto Bulbasaur al filtrar por nombre "Bulbasaur"', () => {
      assert.deepEqual( window.pokemonData.filterData(data, 'Bulbasaur'), [data[0]]);
    });

    it('debería retornar el objeto Bulbasaur al filtrar por numero "1"', () => {
      assert.deepEqual( window.pokemonData.filterData(data, '1'), [data[0]]);
    });

    it('debería retornar los objetos Bulbasaur, Ivysaur y Venusaur al filtrar por el tipo "Grass"', () => {
      assert.deepEqual( window.pokemonData.filterData(data, 'Grass'), [data[0],data[1],data[2]]);
    });

    it('debería retornar los objetos Bulbasaur, Ivysaur y Venusaur al filtrar por el tipo "Poison"', () => {
      assert.deepEqual( window.pokemonData.filterData(data, 'Poison'), [data[0],data[1],data[2]]);
    });
  });
 });
 describe('pokemonData.sortData', () => {

  it('debería ser una función', () => {
    assert.equal(typeof window.pokemonData.sortData, 'function');
  });

  it('debería retornar los objetos ordenados por orden albético creciente', () => {
    assert.deepEqual( window.pokemonData.sortData(data, "name", true), [data[0],data[1],data[2]]);
  });
  
  it('debería retornar los objetos ordenados por orden albético decreciente', () => {
    assert.deepEqual( window.pokemonData.sortData(data, "name", false), [{
      "id": 3,
      "num": "003",
      "name": "Venusaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
      "type": [
        "Grass",
        "Poison"
      ]
    },{
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
      "type": [
        "Grass",
        "Poison"
      ]
    },{
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
      "type": [
        "Grass",
        "Poison"
      ]
    }]);
  });

  it('debería retornar los objetos ordenados por orden numero creciente', () => {
    assert.deepEqual( window.pokemonData.sortData(data, "num", true), [data[0],data[1],data[2]]);
  });

  it('debería retornar los objetos ordenados por orden numero decreciente', () => {
    assert.deepEqual( window.pokemonData.sortData(data, "num", false), [{
      "id": 3,
      "num": "003",
      "name": "Venusaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
      "type": [
        "Grass",
        "Poison"
      ]
    },{
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
      "type": [
        "Grass",
        "Poison"
      ]
    },{
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
      "type": [
        "Grass",
        "Poison"
      ]
    }]);
  });
   
  describe('pokemonData.computeStats', () => {
    it('debería ser una función', () => {
      assert.equal(typeof window.pokemonData.computeStats, 'function');
    });
  
    it('debería retornar un 100% para Pokémons de tipo Grass', () => {
      assert.deepEqual( window.pokemonData.computeStats(data, "Grass"),"100%");
    });

    it('debería retornar un 100% para Pokémons de tipo Poison', () => {
      assert.deepEqual( window.pokemonData.computeStats(data, "Poison"),"100%");
    });
  });
  });
