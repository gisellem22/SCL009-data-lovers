/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

window.pokemonFilter = {

pokemonFilterByNameOrNum = (data,condition) => {

    for (let i = 0; i < allPokemon.length; i++){
  if (allPokemon[i].condition === data || allPokemon[i].condition === parseInt(data)){
      result.push(allPokemon[i]);
  }}}
,
pokemonFilterByType = (data,condition) => {
for (let i = 0; i < allPokemon.length; i++){
for (let j = 0; j < 2; j++){
if (allPokemon[i].condition[j] === data){
    result.push(allPokemon[i]);
}}}}
};
