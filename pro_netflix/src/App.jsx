import React, { useState } from 'react'
import './App.css' // importar archivo CSS 
import {peliculas1, peliculas2, peliculas3} from './movieList.jsx'// Importa variables movieList 
import Header from './header.jsx'; // Importa NetflixHeader

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
      <Header/>

      <div className="section">
        <h3>Animadas</h3>
        <div className="imagenes">
          {peliculas1.map((pelicula) => (
            <div key="pelicula" className="pelicula">
            <img className='imagen' key={pelicula.id} src={pelicula.imagen} alt={pelicula.titulo} />
            <p className="titulo">{pelicula.titulo}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="section">
        <h3>Novelas </h3>
        <div className="imagenes">
          {peliculas2.map((pelicula) => (
            <div key={pelicula.id} className="pelicula">
            <img className='imagen' key={pelicula.id} src={pelicula.imagen} alt={pelicula.titulo} />
            <p className="titulo">{pelicula.titulo}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Accion</h3>
        <div className="imagenes">
          {peliculas3.map((pelicula) => (
            <div key={pelicula.id} className="pelicula">
            <img className='imagen' key={pelicula.id} src={pelicula.imagen} alt={pelicula.titulo} />
            <p className="titulo">{pelicula.titulo}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default App;

