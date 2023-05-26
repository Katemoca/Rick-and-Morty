const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

/*  Dentro de la función reductora, se utiliza una estructura 
  switch para manejar diferentes tipos de acciones. 
  
  [Nota]: El reducer es el que lee las action :)
  */

// [NOTA]: ten en cuenta que el id que recibes por payload es un string, y el id de los personajes (favorite) es un número.
// Se hacen dos estados iguales para que a uno se le apliquen métodos y el otro solamente agrege characters favoritos. 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case "ADD_FAV":
         return { 
          ...state, 
          myFavorites: action.payload, 
          allCharacters: action.payload 
        };
    
    case "REMOVE_FAV":
          return { 
            ...state, 
            myFavorites: action.payload 
          };
    
    case "FILTER": 
      const allCharactersFiltered = state.allCharactersFav.filter((char)=> char.gender === action.payload)
      return {
        ...state, 
        myFavorites: allCharactersFiltered
      };

    case "ORDER":
      const allCharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state, 
        myFavorites: 
        action.payload === "A"
        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
        : allCharactersFavCopy.sort((a, b) => b.id - a.id)
      }

    default:
      return { ...state };
  }
};

export default reducer;

/*[NOTA]: Es importante tener en cuenta que las funciones 
reductoras deben ser puras, 
es decir, no deben realizar ninguna operación que cause un efecto secundario.*/
