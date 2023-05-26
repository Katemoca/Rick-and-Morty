import SearchBar from "../SearchBar/SearchBar";
import { NavLink} from "react-router-dom"; // Se usa {link} para redirigir sin estilos

const Nav = ({ onSearch,  setAccess }) => {
  

  // Esta función es para el Log Out 

  const handleLogOut = () => {
    setAccess(false);
  }


  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>

      <NavLink to= "/favorites">
        <button>Favorites</button>
      </NavLink>

      <button onClick={handleLogOut}>Log Out</button>
    </nav>
  );
};

export default Nav;

// Se puede usar NavLink para agregarle estilos.
