window.pokemonData = {
  byName: (data,condition) => {
    let result = [];
    for (let i = 0; i < data.length; i++){
      if (data[i].name === condition){
        result.push(data[i]);
      } 
    } return result;
    
  } 
  ,
  byNumber: (data,condition) => {
    let result = [];
    for (let i = 0; i < data.length; i++){
      if (data[i].id === parseInt(condition)){
        result.push(data[i]);
      } 
    } return result;
  } 
  ,
  byType: (data,condition) => {
     return data.filter((a)=> a.type[0]===condition || a.type[1]===condition)
      }
  ,
  //Función Ordenar de A a Z
  sortData: (data, sortBy, sortedOrder) => {
    let result = [];
  if (sortedOrder === "increasing"){
    result = data.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
      } else if (sortedOrder === "decreasing"){
    result = data.sort((a,b) => a[sortBy].localeCompare(b[sortBy])).reverse();
      } return result;
 } 
};

