const server = require ('../src/app.js')
const PORT = 3001; // Esta es una buena práctica para guardar el portal en el que se va a levantar

server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
});











/* const http = require("http");
const { getCharById } = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      getCharById(res, +id);
    }
  })

  .listen(3001, 'localhost');

 res.setHeader('Access-Control-Allow-Origin', '*'); ----> Le permite al front-end hacer peticiones. Sin
esta línea posiblemente no funcione el FRONT ( el front hace una petición y luego se evalua esa petición)

OTRA FORMA DE PARSEAR UN STRING EN JAVASCRIPT: 
const str = '100';
const i = +str;  ----> Le ponemos un + adelante del string :) 

console.log(typeof i);

*/
