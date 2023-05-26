import "./components/Styles/App/App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"; // Aquí se ponen las routes al ser App.js  la entry del proyecto.
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/form.jsx";
import Favorites from "./components/Favorites/Favorites";

// const email = "user@gmail.com";
// const password = "123henry";

const URL = "http://localhost:3001/rickandmorty/login/";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  

  // Mientras se hace el back-end se cambió la anterior función login por la nueva
  // Esta nueva versión le va a llevar info al back.
  const login = async (userData) => {
    try {
     const { email, password } = userData;
     const { data } = await axios (URL + `?email=${email}&password=${password}`)
     const { access } = data;
     
     setAccess(access);
     access && navigate("/home");
 
    } catch (error) {
      console.log(error.message)
    }
  };

  // // En esta función login se puede hacer destructuring {email, password}
  // const login = (userData) => {
  //   if (userData.email === EMAIL && userData.password === PASSWORD) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // };

  // Se usa el hook useEffect () y siempre debe tener el array de dependencias eg. [access] para prevenir
  // un loop infinito y se empiezan a hacer peticiones infinitas.

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  // El array de peticiones simula el ciclo de update. Para obligar al usuario ingresar los datos del formulario.

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      
      if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        };

     } catch (error) {
       alert("¡No hay personajes con este ID!");
     }
   };
  

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFiltered);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} setAccess={setAccess} />
      )}

      <hr />
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
