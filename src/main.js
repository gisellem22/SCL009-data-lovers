/* Manejo del DOM */

/*let allPokemon = POKEMON.pokemon;
let name = ["Raichu"];

const pokemonFilterByName = (name) => {
    for (let a = 0; a < allPokemon.length; a++){
        if (allPokemon[a].name === name){
            name.push(allPokemon[a]);
        }
    }
    return name;
};
console.log(pokemonFilterByName(name));*/

let allPokemon = POKEMON.pokemon;
let containerSearch = document.getElementById("search").value;
let containerBtnSearch = document.getElementById("btn_search");
let name;
containerBtnSearch.addEventListener("click", () => {
name = containerSearch;

console.log(name, allPokemon);
console.log(window.pokemonIChooseU.pokemonFilterByName(name));
}
);

