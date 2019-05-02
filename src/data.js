/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.pokemonIChooseU = {
  pokemonFilterByName: (name, allPokemon) => {
    return allPokemon.filter(element => element.name===name);
  },

};
