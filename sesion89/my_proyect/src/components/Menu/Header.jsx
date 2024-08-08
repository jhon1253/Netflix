import React, { useState } from "react";
import "./Header.css";
import Img from "../../assets/mmmppp.png";
import { Link } from "react-scroll";

function Header() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className="contenido">
      <header className="header">
        <div className="container">
          <img className="hover:animate-bounce" src={Img} alt="Logo" />
          <nav>
            <Link to="electronics" smooth={true} duration={200}>
              Electronics
            </Link>
            <Link to="jewelery" smooth={true} duration={200}>
              Jewelery
            </Link>
            <Link to="mensclothing" smooth={true} duration={200}>
              Men's Clothing
            </Link>
            <Link to="womensclothing" smooth={true} duration={200}>
              Women's Clothing
            </Link>
          </nav>

          {mostrarFormulario && (
            <div className="formulario">
              <form>
                <div className="campo">
                  <label htmlFor="usuario">User</label>
                  <input type="text" id="usuario" name="usuario" />
                </div>

                <div className="campo">
                  <label htmlFor="contrasena">Password</label>
                  <input type="password" id="contrasena" name="contrasena" />
                </div>

                <button type="submit">Login</button>
              </form>
            </div>
          )}
        </div>
        <button
          className="btn-ini-sesion"
          type="button"
          onClick={toggleFormulario}
        >
          Login
        </button>

        <button className="" id="menu-btn-Hamburguesa">
          &#9776;
        </button>
      </header>
    </div>
  );
}

export default Header;
