import React from 'react';
import Fragment from "react";
import Link from 'react'

const NavBar = () => {
  
  return (
    
    <Fragment>
      <div className="header-1">
         <link to="/" class="logo"> <i class="image"><img src="images/logo-1.svg" alt="" /></i></link>

        <form action="" class="search-form" />
        <input type="search" name="" placeholder="Buscar productos..." id="search-box" />
        <label for="search-box" class="fas fa-search"></label>
      <form/>

      <div class="icons">
        <div id="search-btn" class="fas fa-search"></div>
        <Link to="/" class="fas fa-heart"></Link>
        <Link to="/" class="fas fa-shopping-cart"></Link>
        <div id="login-btn" class="fas fa-user"></div>
      </div>
    </div><div class="header-2">
        <nav class="navbar">
          <Link to="/home">INICIO</Link>
          <Link to="/featured">DESTACADOS</Link>
          <Link to="/arrivals">RECIENTES</Link>
          <Link to="/reviews">RESEÑAS</Link>
          <Link to="/blogs">NOSOTROS</Link>
          <Link to="./productos.html" target="_blank">PRODUCTOS</Link>
          <Link to="./formulariologin.html">DASHBOARD</Link>
        </nav>
      </div>
      </Fragment>
      
  );
};
  


export default NavBar;
