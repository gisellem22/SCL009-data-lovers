window.pokemonData = {
  filterData: (data, condition) => {
    if (
      [
        "Water",
        "Bug",
        "Dragon",
        "Electric",
        "Ghost",
        "Fire",
        "Ice",
        "Fighting",
        "Normal",
        "Grass",
        "Psychic",
        "Rock",
        "Ground",
        "Poison",
        "Flying",
      ].includes(condition)
    ) {
      return data.filter(
        (a) => a.type[0] === condition || a.type[1] === condition
      );
    } else {
      return data.filter(
        (a) => a.name.includes(condition) || a.id === parseInt(condition)
      );
    }
  },
  //Función Ordenar de A a Z
  sortData: (data, sortBy, sortedOrder) => {
    let result = data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    if (sortedOrder) {
      return result;
    } else {
      return result.reverse();
    }
  },
  computeStats: (data, condition) => {
    let result = data.filter(
      (a) => a.type[0] === condition || a.type[1] === condition
    );
    return Math.round((result.length * 100) / data.length) + "%";
  },
};
