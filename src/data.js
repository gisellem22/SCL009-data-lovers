window.pokemonFilter = {
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
    let result = [];
    for (let i = 0; i < data.length; i++){
      for (let j = 0; j < 2; j++){
        if (data[i].type[j] === condition){
          result.push(data[i]);
        }
      }
    }return result;
  }
};
