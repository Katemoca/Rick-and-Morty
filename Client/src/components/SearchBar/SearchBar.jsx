import { useState } from 'react'; 

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value);
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}


// Aquí no está la función solamente se la pasaron --> {onSearch}
// el evento va hacia arriba buscando a la raíz de la función onSearch para ejecutarla. 