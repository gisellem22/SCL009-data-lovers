fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })

//Declaración de Variables
const allPokemon = window.POKEMON.pokemon;
let containerBtnSearch = document.getElementById("btn_search");
let containerResult = document.getElementById("result");
let search;
let containerAZ = document.getElementById("a_z");
let containerZA = document.getElementById("z_a");
let container1To151 = document.getElementById("number1to151");
let container151To1 = document.getElementById("number151to1");
let containerSelect = document.getElementById("select_type");
let cardHTML = "";

//Función para Primera Letra Mayúscula
const firstToUpperCase = (string) => {
  return string.charAt(0).toUpperCase()+string.slice(1);
  };

//Función Crear Elementos html
const showElements = (data) => {
  for (let i = 0; i < data.length; i++){
    cardHTML +=
     `<div class="card" style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${data[i].id})">
  <img class="card-img-top" src=${data[i].img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data[i].name}</h5>
    <p class="card-text">#${data[i].num}.</p>
    <p class="card-text">Type: ${data[i].type}.</p>
  </div>
</div>`
  } containerResult.innerHTML = cardHTML;
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
    showElements(window.pokemonData.filterData(allPokemon, firstToUpperCase(search.toLowerCase())))
});

//Select de tipos
containerSelect.addEventListener("change", () => {
  cardHTML = "";
  search = containerSelect.value;
  showElements(window.pokemonData.filterData(allPokemon, search));
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
const showPrevEvolution =(pokemon)=>{
  if (pokemon[0].prev_evolution){
    let prev = pokemon[0].prev_evolution[0].name;
    let prevEvolution = allPokemon.filter((a) => a.name === prev);
    return document.getElementById("prev_evolution").innerHTML = `<div class="col-8 col-sm-6"><p>Previews Evolution</p><img class="modal-img" src="${prevEvolution[0].img}" alt="">${prevEvolution[0].name}</div>`;
  } else{
    return "";
  }
};
const showNextEvolution = (pokemon)=>{
  if (pokemon[0].next_evolution){
    let next = pokemon[0].next_evolution[0].name;
    let nextEvolution = allPokemon.filter((a) => a.name === next);
    return document.getElementById("next_evolution").innerHTML = `<div class="col-8 col-sm-6"><p>Next Evolution</p><img class="modal-img" src="${nextEvolution[0].img}" alt="">${nextEvolution[0].name}</div>`;
  } else{
    return "";
}
};
//Función que pasa los datos de los pokemones al modal
const showModal = (id)=>{
  let poke = allPokemon.filter((a) => a.id === id);
  let type1 = poke[0].type[0];
  document.getElementById("modal_title").innerHTML=poke[0].name;
  document.getElementById("poke_img").src = poke[0].img;
  document.getElementById("poke_num").innerHTML="Number: "+ poke[0].num;
  document.getElementById("poke_type").innerHTML ="Type: "+ poke[0].type;
  document.getElementById("poke_height").innerHTML="Height: " + poke[0].height;
  document.getElementById("poke_weight").innerHTML="Weight: " + poke[0].weight;
  document.getElementById("poke_weaknesses").innerHTML= "Weaknesses: " + poke[0].weaknesses;
  document.getElementById("poke_statistics").innerHTML= "Un "+ window.pokemonData.computeStats(allPokemon, type1) + " de los Pokémons son de tipo " + poke[0].type[0];
  document.getElementById("percentage").innerHTML= poke[0].type[0] + " " + window.pokemonData.computeStats(allPokemon, type1);
  document.getElementById("prev_evolution").innerHTML = "";
  document.getElementById("next_evolution").innerHTML = "";
  showPrevEvolution(poke);
  showNextEvolution(poke);
  };

// const showElements = (data) => {
//   data.forEach(element => {
//     cardHTML +=
//      `<div class="card " style="width: 200px;" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${element.name})">
//   <img class="card-img-top" src=${element.img} alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">${element.name}</h5>
//     <p class="card-text">#${element.num}.</p>
//     <p class="card-text">Tipo: ${element.type}.</p>
//   </div>
// </div>`
//   })
//  containerResult.innerHTML = cardHTML;
// };
//let showData = document.getElementById("show_data")
//let containerSelectStatistics = document.getElementById("select_tatistics");
//let containerBtnStatistics = document.getElementById("btn_statistics");
//let showStatistics = document.getElementById("calculate");
//let showAnswer = document.getElementById("answer")
// containerBtnStatistics.addEventListener("click", () => {
//   showData.style.display = (showData.style.display=="block") ?"none" : "block";
//   showStatistics.style.display = (showStatistics.style.display == "none") ?"block" : "none";
//   //Select de Estadística
//   containerSelectStatistics.addEventListener("change", () => {
//   search = containerSelectStatistics.value;
//   showAnswer.innerHTML= "Los Pokémon de tipo "+ search + " representan un "+ window.pokemonData.computeStats(allPokemon, search)+" del total";
// }); 
// });
// "Los Pokémon de tipo "+ search + " representan un " + window.pokemonData.computeStats(allPokemon, search) + " del total";
// document.getElementById("card_number").addEventListener("click", () => {
//   showData.style.display = (showData.style.display=="block") ?"none" : "block";
//   showCalculation.style.display = (showCalculation.style.display == "none") ?"block" : "none";
// });
