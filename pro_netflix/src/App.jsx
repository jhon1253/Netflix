import React, { useState } from 'react'
import './App.css' // Asegúrate de importar tu archivo CSS si es necesario
import {peliculas1, peliculas2, peliculas3} from './movieList.jsx'// Importa tus variables de movieList correctamente
import Header from './header.jsx'; // Importa NetflixHeader correctamente

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>

      <div className="section">
        <h3>Animadas</h3>
        <div className="imagenes">
          {peliculas1.map((pelicula) => (
            <img className='imagen' key={pelicula.id} src={pelicula.imagen} alt={pelicula.titulo} />
          ))}
        </div>
      </div>


      <div className="section">
        <h3>Novelas </h3>
        <div className="imagenes">
          {peliculas2.map((pelicula) => (
            <img className='imagen' key={pelicula.id} src={pelicula.imagen} alt={pelicula.titulo} />
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Accion</h3>
        <div className="imagenes">
          {peliculas3.map((pelicula) => (
            <img className='imagen' key={pelicula.id} src={pelicula.imagen} alt={pelicula.titulo} />
          ))}
        </div>
      </div>

    </>
  );
}

export default App;

