fetch(
  "https://raw.githubusercontent.com/gisellem22/SCL009-data-lovers/master/src/data/pokemon/pokemon.json"
)
  .then((response) => response.json())
  .then((data) => {
    //Declaración de Variables
    // const allPokemon = window.POKEMON.pokemon;
    const allPokemon = data.pokemon;
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
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    //Función Crear Elementos html
    const showElements = (data) => {
      for (let i = 0; i < data.length; i++) {
        let pokeType = getTypeIcon(data[i].type);
        cardHTML += `<div class="card m-2 p-0" data-toggle="modal" data-target="#exampleModalCenter" onclick="showModal(${data[i].id})">
  <img class="card-img-top" src=${data[i].img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data[i].name}</h5>
    <p class="pb-1">#${data[i].num}</p>
    <span class="text-center">${pokeType}.</span>
    
  </div>
</div>`;
      }
      containerResult.innerHTML = cardHTML;
    };
    // <img src="./icons/${data[i].type}.svg" style="width: 30px; margin-top: -80px;" alt="" />

    const getTypeIcon = (types) => {
      let typesHTML = "";

      types.forEach((type) => {
        let pokeType = type.toLowerCase();
        typesHTML += `
        <img src="./icons/${pokeType}.svg" class="icon ${pokeType} ml-3" style="width: 40px; height: 40px; padding:4px; margin-top: -2px" alt="" title="${pokeType}" />
        `;
      });
      return typesHTML;
    };

    //Cards Aleatorios por defecto
    const radomData = (data) => {
      let result = data;
      return result.sort(() => Math.random() - 0.5);
    };
    showElements(radomData(allPokemon));

    // Search
    document.getElementById("search").addEventListener("keyup", function (e) {
      cardHTML = "";
      search = document.getElementById("search").value;
      const pokeList = window.pokemonData.filterData(
        allPokemon,
        firstToUpperCase(search.toLowerCase())
      );
      if (pokeList.length > 0) {
        showElements(pokeList);
      } else {
        containerResult.innerHTML = `
        <div class="d-flex flex-column align-items-center mt-5">
        <h1>Pokémon Not Found</h1>
        <img src="./img/pokemon-not-found.png" alt="" style="width: 200px; margin-top: 1rem">
        </div>
        `;
      }
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
      showElements(window.pokemonData.sortData(allPokemon, "name", true));
    });

    //Botón Ordenar por Nombre de Z a A
    containerZA.addEventListener("click", () => {
      cardHTML = "";
      showElements(window.pokemonData.sortData(allPokemon, "name", false));
    });

    //Botón Ordenar por Nombre de 1 a 151
    container1To151.addEventListener("click", () => {
      cardHTML = "";
      showElements(window.pokemonData.sortData(allPokemon, "num", true));
    });

    //Botón Ordenar por Nombre de 151 a 1
    container151To1.addEventListener("click", () => {
      cardHTML = "";
      showElements(window.pokemonData.sortData(allPokemon, "num", false));
    });

    const showPrevEvolution = (pokemon) => {
      if (pokemon[0].prev_evolution) {
        let prev = pokemon[0].prev_evolution[0].name;
        let prevEvolution = allPokemon.filter((a) => a.name === prev);
        return (document.getElementById("prev_evolution").innerHTML = `
        <h6>Previous Evolution</h6>
        <div class="evolution-poke">
            <img class="modal-img" style="width: 80px" src="${prevEvolution[0].img}" alt="">${prevEvolution[0].name}
        </div>
        `);
      } else {
        return "";
      }
    };
    const showNextEvolution = (pokemon) => {
      if (pokemon[0].next_evolution) {
        let next = pokemon[0].next_evolution[0].name;
        let nextEvolution = allPokemon.filter((a) => a.name === next);
        return (document.getElementById("next_evolution").innerHTML = `
        <h6>Next Evolution</h6>
        <div class="evolution-poke">
            <img class="modal-img" style="width: 80px" src="${nextEvolution[0].img}" alt="">${nextEvolution[0].name}
        </div>
        `);
      } else {
        return "";
      }
    };

    const showModal = (id) => {
      let poke = allPokemon.filter((a) => a.id === id);
      let pokeType = getTypeIcon(poke[0].type);
      let pokeTypeWeak = getTypeIcon(poke[0].weaknesses);

      document.getElementById("modal_title").innerHTML = `
      <h4 class="modal-title">${poke[0].name}</h4>
      <h4 class="modal-title">#${poke[0].num}</h4>
      `;
      document.getElementById("poke_img").src = poke[0].img;
      document.getElementById("poke_type").innerHTML = `
      <span>Type:</span>
      <span class="pl-2">${pokeType}.</span> 
      `;
      document.getElementById("poke_height").innerHTML =
        "Height: " + poke[0].height;
      document.getElementById("poke_weight").innerHTML =
        "Weight: " + poke[0].weight;
      document.getElementById("poke_weaknesses").innerHTML = `
      <span>Weaknesses:</span>
      <span class="pl-3 d-flex flex-nowrap">${pokeTypeWeak}.</span> 
      </div>
      `;
      document.getElementById("prev_evolution").innerHTML = "";
      document.getElementById("next_evolution").innerHTML = "";
      showPrevEvolution(poke);
      showNextEvolution(poke);
    };
    window.showModal = showModal;
  });
