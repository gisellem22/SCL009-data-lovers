/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//Funcion para Filtrar por Nombre y Numero
window.pokemonData = {
  byName: (data,condition) => {
    let result = [];
    for (let i = 0; i < data.length; i++){
      if (data[i].name === condition){
        result.push(data[i]);
        }
      else if (data[i].id === parseInt(condition)){
          result.push(data[i]);
      } 

    } return result;
    
  },
  //Funcion para Filtrar por Tipo
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

//Funcion para Ordenar de A - Z