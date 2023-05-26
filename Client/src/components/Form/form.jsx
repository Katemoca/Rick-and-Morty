import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // Función para avisarle al estado local que va a ser igual al input: handleChange toma el event como parámetro
  // y se toma al userData ({ ...copia del estado, y se iguala el valor del name del evento con el value})

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  // La función handleChange es en donde se hacen las validaciones encapsuladas en el doc validation.js
  // Se hace un renderizado condicional debajo del input para poder imprimir los errores que almacena el estado [errorrs]
  // Este renderizado se hace con {} usando a la propiedad de userData y con una etiqueta <p>{errors.propiedad}</p>

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"> Email: </label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <br />
      <br />
      <label htmlFor="password"> Password: </label>
      <input
        type="text"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <hr />
      <button>Submit</button>
    </form>
  );
};

export default Form;

/* ESTO ES DIFERENTE A LO QUE HACE DAIANA: 

import Styles from "./Form.module.css" ---> por si se tienen estilos hay que importarlos

export default function Form(props) {
  return(
    <div classNmae={styles.container}> ---> ¡ESTO ES PARA ESTILIZAR CON CSS!
      <form>
        <label htmlFor="email"> Email: </label>
        <input type="text" name="email" value={userData.email} onChange={handleChange} />
        <label htmlFor="password"> Password: </label>
        <input type="text" name="password" value={userData.password} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}














*/
