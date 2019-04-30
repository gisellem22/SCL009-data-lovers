//Declaración de Variables
const allPokemon = window.POKEMON.pokemon;
let containerBtnSearch = document.getElementById("btn_search");
let containerResult = document.getElementById("result");
let search;
// let containerAZ = document.getElementById("a_z");
// let containerZA = document.getElementById("z_a");
// let container1to151 = document.getElementById("number1to151");
// let container151to1 = document.getElementById("number151to1");
let containerSelect = document.getElementById("select_type");
let cardHTML;

//Función Crear Elementos html
const showElements = (data) => {
  data.forEach(element => {
     cardHTML += `
     <div class="card mb-3" style="max-width: 540px;">
       <div class="row no-gutters">
         <div class="col-md-4">
           <img src="${element.img}"class="card-img" alt="Card image cap">
         </div>
             <div class="col-md-8">
               <div class="card-body">
                 <h5 class="card-title">${element.name}</h5>
                 <p class="card-text">#${element.num}</p>
                 <p class="card-text">tipo: ${element.type}</p>
                 </div>
             </div>
         </div>
     </div>`
  })
 containerResult.innerHTML = cardHTML;
};
//Botón Search Por Nombre
containerBtnSearch.addEventListener("click", () => {
    cardHTML = "";
    search = document.getElementById("search").value;
    showElements(window.pokemonFilter.byName(allPokemon, search));
    showElements(window.pokemonFilter.byNumber(allPokemon, search));
    showElements(window.pokemonFilter.byType(allPokemon, search));
});
//Select de tipos
containerSelect.addEventListener("change", () => {
  cardHTML = "";
  search = containerSelect.option;
  [containerSelect.selectedIndex].text;
  showElements(window.pokemonFilter.byType(allPokemon, search));
}); 

// //Botón Ordenar por Nombre de A a Z
// containerAZ.addEventListener("click", () => {
//   let orderedAZ = az();
//   console.log (orderedAZ);
//   createElement(orderedAZ);
// });

// //Botón Ordenar por Nombre de Z a A
// containerZA.addEventListener("click", () => {
//   let orderedZA = za();
//   console.log (orderedZA);
//   createElement(orderedZA);
// });

// //Botón Ordenar por Numero de 1 a 151
// container1to151.addEventListener("click", () => {
//   createElement(allPokemon);
//   console.log (allPokemon);
// });

// // //Botón Ordenar por Numero de 151 a 1
// container151to1.addEventListener("click", () => {
//   let from151to1 = order151to1();
//   console.log (from151to1);
//   createElement(from151to1);
// });

// //Función Ordenar de A a Z
// const az = () => {
//   return allPokemon.sort((a,b) => {
//    a.name < b.name }
//    )};

// //Función  Ordenar de Z a A
// const za = () => {
//   return allPokemon.sort((c,d) => {
//     if (c.name > d.name) 
//    return -1;
//   if (c.name < d.name)
//    return 1;
//   return 0; 
//  })};

// //Función  Ordenar de 151 a 1
// const order151to1 = () => {
//   return allPokemon.sort((c,d) => {
//     if (c.id > d.id) 
//    return -1;
//   if (c.id < d.id)
//    return 1;
//   return 0; 
//  })};
 
//    //Función Crear Elementos html
// let createElement = (data) => {  
//   for (let b= 0; b < data.length; b++){
//     let newDiv = document.createElement("IMG");
//     newDiv.setAttribute("src",data[b].img);
//     document.getElementById("result").appendChild(newDiv);
//   }
// };