import React from 'react';
import Fragment from "react";

const NavBar = () => {
  
  return (
    
    <Fragment>
      <div className="header-1">
        <a href="/" className="logo"> <i className="image"><img src="images/logo-1.svg" alt="" /></i></a>

        <form action="" class="search-form" />
        <input type="search" name="" placeholder="Buscar productos..." id="search-box" />
        <label for="search-box" className="fas fa-search"></label>
      <form/>

      <div className="icons">
        <div id="search-btn" className="fas fa-search"></div>
        <a href="/" class="fas fa-heart"></a>
        <a href="/" class="fas fa-shopping-cart"></a>
        <div id="login-btn" className="fas fa-user"></div>
      </div>
    </div><div className="header-2">
        <nav className="navbar">
          <a href="/home">INICIO</a>
          <a href="/featured">DESTACADOS</a>
          <a href="/arrivals">RECIENTES</a>
          <a href="/reviews">RESEÑAS</a>
          <a href="/blogs">NOSOTROS</a>
          <a href="./productos.html" target="_blank">PRODUCTOS</a>
          <a href="./formulariologin.html">DASHBOARD</a>
        </nav>
      </div>
      </Fragment>
      
  );
};
  


export default NavBar;
