import { BrowserRouter as Router, Link } from "react-router-dom";
const Nosotros = () => {
  return (
    <div className="container">
      <Router>
        <h1 className="heading">
          {" "}
          <span>SOBRE NOSOTROS</span>{" "}
        </h1>
        <div className="swiper blogs-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <div className="image">
                <img src="images/blog-1.jpg" alt="" />
              </div>
              <div className="content">
                <h3>QUIENES SOMOS</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, odio.
                </p>
                <Link to="/" className="btn">
                  Leer más
                </Link>
              </div>
            </div>
            <div className="swiper-slide box">
              <div className="image">
                <img src="images/blog-2.png" alt="" />
              </div>
              <div className="content">
                <h3>VENDE CON NOSOTROS</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, odio.
                </p>
                <Link to="/" className="btn">
                  Leer más
                </Link>
              </div>
            </div>
            <div className="swiper-slide box">
              <div className="image">
                <img src="images/blog-3.jpg" alt="" />
              </div>
              <div className="content">
                <h3>NUESTRAS POLÍTICAS</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, odio.
                </p>
                <Link to="/" className="btn">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Nosotros;
