import { BrowserRouter as Link } from "react-router-dom";
import logo from "../assets/images/logo-3.svg";
const Footer = () => {
    return (
    <div className="container">
        <section className="footer">

<div className="box-container">
    <div className="box">
        <h3>ENLACES</h3>
        <a href="/"> <i className="fas fa-arrow-right"></i> Inicio </a>
        <a href="/"> <i className="fas fa-arrow-right"></i> Destacados </a>
        <a href="/"> <i className="fas fa-arrow-right"></i> Recientes </a>
        <a href="/"> <i className="fas fa-arrow-right"></i> Reseñas </a>
        <a href="/"> <i className="fas fa-arrow-right"></i> Nosotros </a>
    </div>

    <div className="box">
        <h3>EXTRAS</h3>
        <a href="/"> <i className="fas fa-arrow-right"></i> Mi cuenta </a>
        <a href="/"> <i className="fas fa-arrow-right"></i> Mi carrito </a>
        <a href="/"> <i className="fas fa-arrow-right"></i> Mis favoritos </a>
        <a href="/"> <i className="fas fa-arrow-right"></i> Contáctanos </a>
    </div>

    <div className="box">
        <h3>SOPORTE</h3>
        <a href="/"> <i className="fas fa-phone"></i> (+57) 310 406 7006 </a>
        <a href="/"> <i className="fas fa-phone"></i> (+57) 300 445 9700 </a>
        <a href="/"> <i className="fas fa-envelope"></i> ancestra@ancestra.com </a>
    </div>

    <div className="box">
        <img src={logo} className="imagotipo" alt="logo"/>
    </div>
</div>

<div className="credit">
    <div className="share">
        <Link to="/" className="fab fa-facebook-f"></Link>
        <Link to="/" className="fab fa-instagram"></Link>
        <Link to="/" className="fab fa-pinterest"></Link>
    </div>
    <br/>
    <p>Copyright 2021 <span>Ancestra</span> | Todos los derechos reservados.</p>
</div>

</section>
    </div>
    ); 
};
export default Footer;
