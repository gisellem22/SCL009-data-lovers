//Declaración de Variables
const allPokemon = window.POKEMON.pokemon;
let containerBtnSearch = document.getElementById("btn_search");
let showData = document.getElementById("show_data");
let containerResult = document.getElementById("result");
let search;
let containerAZ = document.getElementById("a_z");
let containerZA = document.getElementById("z_a");
let container1To151 = document.getElementById("number1to151");
let container151To1 = document.getElementById("number151to1");
let containerSelect = document.getElementById("select_type");
let containerChoose = document.getElementById("choose_pokemon");
let containerModal = document.getElementById("show_choose");
let cardHTML = "";
let modalCard;

//Función Crear Elementos html
const showElements = (data) => {
  data.forEach(element => {
    cardHTML +=
     `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${element.name})">
  <img class="card-img-top" src=${element.img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">#${element.num}.</p>
    <p class="card-text">Tipo: ${element.type}.</p>
  </div>
</div>`
  })
 containerResult.innerHTML = cardHTML;
 
};

//Cards Aleatorios por defecto
const radomData = (data)=>{
  return data.sort(() => Math.random() - 0.5)
};
showElements(radomData(allPokemon));

//Botón Search
containerBtnSearch.addEventListener("click", () => {
    cardHTML = "";
    search = document.getElementById("search").value;
    showElements(window.pokemonData.byName(allPokemon, search));
    showElements(window.pokemonData.byNumber(allPokemon, search));
    showElements(window.pokemonData.byType(allPokemon, search));
});
//Select de tipos
containerSelect.addEventListener("change", () => {
  cardHTML = "";
  search = containerSelect.value;
  showElements(window.pokemonData.byType(allPokemon, search));
}); 

//Botón Ordenar por Nombre de A a Z
containerAZ.addEventListener("click", () => {
  cardHTML = "";
  showElements(window.pokemonData.sortData(allPokemon,"name", "increasing"));
});
//Botón Ordenar por Nombre de Z a A
containerZA.addEventListener("click", () => {
  cardHTML = "";
  showElements(window.pokemonData.sortData(allPokemon,"name", "decreasing"));
});
//Botón Ordenar por Nombre de 1 a 151
container1To151.addEventListener("click", () => {
  cardHTML = "";
  showElements(window.pokemonData.sortData(allPokemon,"num", "increasing"));
});
//Botón Ordenar por Nombre de 151 a 1
container151To1.addEventListener("click", () => {
  cardHTML = "";
  showElements(window.pokemonData.sortData(allPokemon,"num", "decreasing"));
});
// containerChoose.addEventListener("click", () => {
//   showData.style.display = (showData.style.display=="block") ?"none" : "block";
//   containerModal.style.display = (containerModal.style.display == "none") ?"block" : "none";
// });
// document.getElementById("card_number").addEventListener("click", () => {
//   showData.style.display = (showData.style.display=="block") ?"none" : "block";
//   containerModal.style.display = (containerModal.style.display == "none") ?"block" : "none";
// });
const showModal = (data)=>{
  document.getElementById("exampleModalCenterTitle").innerHTML= data;
 
};
