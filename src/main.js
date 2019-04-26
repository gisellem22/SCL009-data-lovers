let allPokemon = POKEMON.pokemon;
let containerBtnSearch = document.getElementById("btn_search");
let containerResult = document.getElementById("result");
let search;
let pokemonName;
let pokeName;

// let boton = document.getElementById("btn_buscar");
// let mostrar = document.getElementById("result");
// let name;

// function stopDefAction(evt) {
//     evt.preventDefault();
// };

const pokemonFilterByName = (name) => {
    pokemonName = allPokemon.filter(element => element.name===name);
    pokeName= pokemonName[0].img;
    return pokeName;
};

let addElement = (data) => {  
    let newDiv = document.createElement("IMG"); 
    newDiv.setAttribute("src",data);
    // newDiv.setAttribute("height", "200");
    // newDiv.setAttribute("width", "400");
    document.getElementById("result").appendChild(newDiv);
  };

containerBtnSearch.addEventListener("click", () => {
    search = document.getElementById("search").value;
    let nameSearched = pokemonFilterByName(search);
    addElement(nameSearched);
});

// if (type === "planta"){
//     type = "Grass")
// }



// let num = 45;                             udxx

// const pokemonFilterByNumber = (num) => {
//     return allPokemon.filter(element => element.id===num);
// };
// console.log(pokemonFilterByNumber(num));

// let type = "Grass";
// const pokemonFilterByType = (type) => {
//     let result = [];
//     for (let i = 0; i < allPokemon.length; i++){
// for (let j = 0; j < 2; j++){
//   if (allPokemon[i].type[j] ===type){
//       result.push(allPokemon[i]);
//   }
//     }
// }return result;
// };
// console.log(pokemonFilterByType(type));

// const pokemonFilterByType = (type) => {

// let position = allPokemon.filter (element => element = element[i].type);
// return position;

// };
// console.log(pokemonFilterByType(type));
