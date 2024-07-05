

import './header.css';

function Header() {
    return (
        <div className="contenido">
            <header className="header">
                <div className="container">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">TV Shows</a>
                        <a href="#">Movies</a>
                        <a href="#">New & Popular</a>
                        <a href="#">My List</a>
                    </nav>
                </div>  

                <button className="class-menu-btn" id="menu-btn">&#9776;</button>

                <div className="barra" id="barra">
                    <button className="lupa">&#x1F50E;&#xFE0E;</button>
                    <a href="#">Kids</a>
                    <button className="campana"><i className="bi bi-bell-fill"></i></button>
                    <img className="img" src="https://highxtar.com/wp-content/uploads/2022/09/highxtar-este-es-el-icono-de-perfil-de-netflix-mas-utilizado-destacada.jpg" alt="Profile" />
                    <button className="triangulo"><i className="bi bi-caret-down-fill"></i></button>
                </div>
            </header>
        </div>
    );
}

export default Header; // Aquí se exporta NetflixHeader como default


