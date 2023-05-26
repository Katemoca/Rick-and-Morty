import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))); 

export default store;





// import {createStore, applyMiddleware, compose} from 'redux';
// import reducer from './reducer';
// import  thunkMiddleware  from 'redux-thunk';


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // La línea de arriba nos sirve para configurar las devtools de nuestro navegador. 

// const store = createStore(
//     reducer, // Tenemos que crear el componente en reducer.js
//     composeEnhancer(applyMiddleware(thunkMiddleware)));


// export default store;
// // Esta es la configuración del store.js