window.pokemonData = {
  filterData: (data, condition) => {
    console.log(condition);
    return data.filter(
      (a) =>
        a.name.includes(condition) ||
        a.id === parseInt(condition) ||
        a.type[0].includes(condition) ||
        a.type[1]?.includes(condition)
    );
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
