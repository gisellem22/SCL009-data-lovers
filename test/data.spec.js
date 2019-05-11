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
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",

  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
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
    assert.deepEqual( window.pokemonData.sortData(data, "name", "increasing"), [data[0],data[1],data[2]]);
  });
  
  it('debería retornar los objetos ordenados por orden albético decreciente', () => {
    assert.deepEqual( window.pokemonData.sortData(data, "name", "decreasing"), [data[0],data[1],data[2]]);
  });

  it('debería retornar los objetos ordenados por orden numero creciente', () => {
    assert.deepEqual( window.pokemonData.sortData(data, "num", "increasing"), [data[0],data[1],data[2]]);
  });

  it('debería retornar los objetos ordenados por orden numero decreciente', () => {
    assert.deepEqual( window.pokemonData.sortData(data, "num", "decreasing"), [data[0],data[1],data[2]]);
  });

  describe('pokemonData.findPokemon', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.pokemonData.findPokemon, 'function');
    });
  
    it('debería retornar el objeto BUlbasaur para el id 01', () => {
      assert.deepEqual( window.pokemonData.findPokemon(data, data[0].id), [data[0]]);
    });
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
