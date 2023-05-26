import axios from "axios";

export const addFav = (character) => {
const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character)

      if(!data.length) throw Error ('No hay favoritos')

       return dispatch({
         type: "ADD_FAV",
         payload: data,
       });
   
    } catch (error) {
      console.log(error.message)
    }
  };
};

export const removeFav = (id) => {
const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint)
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      }); 

    } catch (error) {
      console.log(error.message)
    }
  };
};

export const filterCards = (gender) => {
  return { type: "FILTER", payload: gender };
};

export const orderCards = (order) => {
  return { type: "ORDER", payload: order };
};

// [NOTA]: ten en cuenta que el id que recibes por payload es un string, y el id de los personajes es un número.

// Una action es una función que retorna objetos.
/* Una action-creator es una función que devuelve un objeto de acción (action) 
con una propiedad "type" que describe 
el tipo de acción que se va a realizar y 
opcionalmente puede contener otros datos relevantes para la acción. */
