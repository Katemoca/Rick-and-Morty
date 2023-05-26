import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);

  // Para los botones también se puded usar un ternario:

  // {<button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>)}
  return (
    <div className={style.contenedor}>
      {<button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>}

      <button onClick={() => onClose(id)}>Close</button>

      <Link to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
        <h2>Specie: {species}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Status: {status}</h2>
        <h2>Origin: {origin}</h2>
        <img src={image} alt="" />
      </Link>
    </div>
  );
};

// Se despacha a la acción para que pueda llegar al reducer :)

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

// Cómo centrar un <div>

/* mapDispatchToProps es una función 
que se utiliza para conectar los métodos de acción (action creators) 
a los props de un componente en React-Redux. 

ESTO ES PARA EL CONECT QUE SE IMPORTÓ Y QUE SE VA A UTILIZAR: 
export default connect(mapStateToProps, mapDispatchToProps)(Counter);*/
