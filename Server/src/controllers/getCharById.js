const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios (`${URL}/${id}`)

    if(!data.name) throw Error (`Faltan datos del personaje con ID: ${id}`);

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status
    }
    return res.status(200).json(character)
    
  } catch (error) {
    return error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.response.data.error)
  }
};
  

module.exports = {
  getCharById,
};

// const axios = require ('axios');

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status}) => {
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin: origin,
//             image,
//             status
//         }

//         return res
//         .writeHead(200, {'Content-Type':'json'})
//         .end(JSON.stringify(character))
//     })

//     .catch(error => {
//             return res
//             .writeHead(500, {'Content-Type':'text/plain'})
//             .end(error.message)
//         }
//     )
// }

// module.exports = {
//     getCharById
// };

// // Petición a API: https://rickandmortyapi.com/api/character/:id
// // el id que utilices debe ser el que recibes por parámetro.

// // [Nota]: fetch funciona en el front-end pero en el back-end hay que importarlo obligatoriamente.

// //.catch --> es un manejador de errores y sirve como un .then pero solo con error handler
