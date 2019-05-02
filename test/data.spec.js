global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('pokemonFilter', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof pokemonFilter, 'object');
  });

  describe('pokemonFilter.byName', () => {
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
  
    it('debería ser una función', () => {
      assert.equal(typeof window.pokemonFilter.byName, 'function');
    });

    it('debería retornar el objeto Bulbasaur al filtrar por nombre "Bulbasaur"', () => {
      assert.deepEqual( window.pokemonFilter.byName(data, 'Bulbasaur'), [data[0]]);
    });
    
    it('debería ser una función', () => {
      assert.equal(typeof window.pokemonFilter.byNumber, 'function');
    });

    it('debería retornar el objeto Bulbasaur al filtrar por numero "1"', () => {
      assert.deepEqual( window.pokemonFilter.byNumber(data, '1'), [data[0]]);
    });

    it('debería ser una función', () => {
      assert.equal(typeof window.pokemonFilter.byType, 'function');
    });

    it('debería retornar los objetos Bulbasaur, Ivysaur y Venusaur al filtrar por el tipo "Grass"', () => {
      assert.deepEqual( window.pokemonFilter.byType(data, 'Grass'), [data[0],data[1],data[2]]);
    });
  });
 });
