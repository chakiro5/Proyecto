import { BrowserRouter as Router, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container">
      <Router>
        <header className="header">
          <div className="header-1">
            <Link to="/" className="logo">
              {" "}
              <i className="image">
                <img src="images/logo-1.svg" alt="" />
              </i>
            </Link >

            <form action="" className="search-form">
              <input
                type="search"
                name=""
                placeholder="Buscar productos..."
                id="search-box"
              />
              <label htmlFor="search-box" className="fas fa-search"></label>
            </form>

            <div className="icons">
              <div id="search-btn" className="fas fa-search"></div>
              <Link to="/" className="fas fa-heart"></Link>
              <Link to="/" className="fas fa-shopping-cart"></Link>
              <div id="login-btn" className="fas fa-user"></div>
            </div>
          </div>

          <div className="header-2">
            <nav className="navbar">
              <Link to="/home">INICIO</Link >
              <Link to="./destacados">DESTACADOS</Link >
              <Link to="./recientes">RECIENTES</Link >
              <Link to="./calificaciones">CALIFICACIONES Y OPINIONES</Link >
              <Link to="./nosotros">NOSOTROS</Link >
              <Link to="./productos">PRODUCTOS</Link >
            </nav>
          </div>
        </header>
        <nav className="bottom-navbar">
          <Link to="/home" className="fas fa-home"></Link>
          <Link to="/featured" className="fas fa-list"></Link>
          <Link to="/arrivals" className="fas fa-tags"></Link>
          <Link to="/reviews" className="fas fa-comments"></Link>
          <Link to="/blogs" className="fas fa-id-card"></Link>
        </nav>

        <div className="login-form-container">
          <div id="close-login-btn" className="fas fa-times"></div>
          <form action="">
            <h3>INICIAR SESIÓN</h3>
            <span>Usuario:</span>
            <input
              type="email"
              name=""
              className="box"
              placeholder="Ingrese su correo*"
              id=""
            />
            <span>Contraseña:</span>
            <input
              type="password"
              name=""
              className="box"
              placeholder="Ingrese su contraseña*"
              id=""
            />
            <div className="checkbox">
              <input type="checkbox" name="" id="remember-me" />
              <label htmlFor="remember-me"> Recordar contraseña.</label>
            </div>
            <input type="submit" value="ENVIAR" className="btn" />
         </form>
        </div>
      </Router>
    </div>
  );
};

export default NavBar;
