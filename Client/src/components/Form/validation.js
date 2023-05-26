// userData como parámetro es de donde se obtiene la info del user.

const validation = (userData) => {

  // Se inicializa un objeto vacio que va a guardar cada error encontrado como una nueva propiedad 
  // de este obj con el respectivo mensaje que la función validation () contiene. 

   const errors = {};

  // Se generan condicionales para evaluar cada caso: 

  if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)) {
    errors.email = "El email es inválido";
  }
  if (!userData.email) {
    errors.email = "El email no puede estar vacio";
  }
  if (userData.email.length > 35) {
    errors.email = "El email no puede tener más de 35 carácteres";
  }

  if(!/.*\d+.*/.test(userData.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  }

  if(userData.password.length < 6 || userData.password.length > 10){
    errors.password = "La contraseña debe tener un tamaño de entre 6 y 10 carácteres";
  }

  return errors;
}


// Se está exportando 
export default validation;