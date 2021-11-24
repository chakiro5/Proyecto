import { BrowserRouter as Router, Link } from "react-router-dom";
const Home = () => {
  return (
        <>
        <div className="container">
          <Router>
          <h3>
            Descuento del 25% <br/> en éstos productos.
          </h3>
          <p>
            Nunca sabes lo que quieres hasta que lo ves en oferta. <br/>{" "}
            <i>
              Promoción válida hasta el 15 de octubre del 2021 <br/> o hasta
              acabar CICLO 4
            </i>
          </p>
         <div className="swiper promociones-slider">
          <div className="swiper-wrapper">
            <Link to="/" className="swiper-slide">
              <img src="images/art-1.png" alt=""/>
            </Link>
            <Link to="/" className="swiper-slide">
              <img src="images/art-2.png" alt=""/>
            </Link>
            <Link to="/" className="swiper-slide">
              <img src="images/art-3.png" alt=""/>
            </Link>
            <Link to="/" className="swiper-slide">
              <img src="images/art-4.png" alt=""/>
            </Link>
            <Link to="/" className="swiper-slide">
              <img src="images/art-5.png" alt=""/>
            </Link>
            <Link to="/" className="swiper-slide">
              <img src="images/art-6.png" alt=""/>
            </Link>
          </div>
          <img src="images/repisa-1.png" className="stand" alt=""/>
        </div>
        </Router>
    </div>
    </>
  );
};

export default Home;
