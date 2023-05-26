import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Redux/store'; 


// El <Provider> provee a toda la app un 'garage' global.
ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById("root")
);

/*
La coma dentro del render se pone despues de cerrar el componente padre, algo así: 

 <BrowserRouter>
    <App />
  </BrowserRouter>, --> Aquí porque se rompe si la ponemos al lado de <App />



  document.getElementById('root')  es el segundo parámetro del render. 
  
*/
