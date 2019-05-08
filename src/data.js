window.pokemonData = {
  byName: (data,condition) => {
  return data.filter((a) => a.name === condition );
  } 
  ,
  byNumber: (data,condition) => {
   return data.filter((a) => a.id === parseInt(condition));
  } 
  ,
  byType: (data,condition) => {
     return data.filter((a)=> a.type[0]===condition || a.type[1]===condition)
  }
  ,
  //Función Ordenar de A a Z
  sortData: (data, sortBy, sortedOrder) => {
  if (sortedOrder === "increasing"){
    return data.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
      } else if (sortedOrder === "decreasing"){
    return data.sort((a,b) => a[sortBy].localeCompare(b[sortBy])).reverse();
      }
 } 
};

