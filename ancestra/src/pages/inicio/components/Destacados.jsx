import { BrowserRouter as Router, Link } from "react-router-dom";
const Destacados = () => {
  return (
    <div className="container">
      <Router>
      <h1 className="heading">
        {" "}
        <span>PRODUCTOS DESTACADOS</span>{" "}
      </h1>
      <div className="swiper featured-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-1.png" alt="" />
            </div>
            <div className="content">
              <h3>Bolso de Fique</h3>
              <div className="price">
                $59.000 <span>$79.000</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-2.png" alt="" />
            </div>
            <div className="content">
              <h3>Jarrón Decorativo</h3>
              <div className="price">
                $49,000 <span>$59.000</span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-3.png" alt="" />
            </div>
            <div className="content">
              <h3>Sombrero Prensado</h3>
              <div className="price">
                $59.000 <span>$69.000</span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-4.png" alt="" />
            </div>
            <div className="content">
              <h3>Mochila Wayú</h3>
              <div className="price">
                $99.000 <span>$119.000</span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-5.png" alt="" />
            </div>
            <div className="content">
              <h3>Jarrón Madera</h3>
              <div className="price">
                $199.000 <span>$229.000</span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-6.png" alt="" />
            </div>
            <div className="content">
              <h3>Zampoña Andina</h3>
              <div className="price">
                $39.000 <span>$49.000</span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-7.png" alt="" />
            </div>
            <div className="content">
              <h3>Ruana Tradicional</h3>
              <div className="price">
                $239.000 <span>$269.000 </span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-8.png" alt="" />
            </div>
            <div className="content">
              <h3>Olla de Barro</h3>
              <div className="price">
                $69.000 <span>$79.000</span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-9.png" alt="" />
            </div>
            <div className="content">
              <h3>Mochila Tradicional</h3>
              <div className="price">
                $49.000 <span>$69.000</span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="images/art-10.png" alt="" />
            </div>
            <div className="content">
              <h3>Mochila Arhuaca</h3>
              <div className="price">
                $209.000 <span>$239.000</span>
              </div>
              <Link to="/" className="btn">
                Añadir al carrito
              </Link>
            </div>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      </Router>
    </div>
  );
};

export default Destacados;
