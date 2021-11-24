const Calificaciones = () => {
  return (
      <>
    <div className="reviews" id="reviews"/>
      <h1 className="heading">
        {" "}
        <span>CALIFICACIONES Y OPINIONES</span>{" "}
      </h1>

      <div className="swiper reviews-slider"/>
        <div className="swiper-wrapper">
          <div className="swiper-slide box"/>
            <img src="images/Andres Lopez.png" alt=""/>
            <h3>Carlos López</h3>
            <p>
              Muy bonitas las artesanías y todo, pero en realidad lo que estoy
              buscando es a alguien que me quiera de verdad. :({" "}
            </p>
          </div>

          <div className="swiper-slide box">
            <img src="images/yo.png" alt=""/>
            <h3>Luis Moreno</h3>
            <p>
              Gran trabajo de las comunidades, muy buena gestión, debemos seguir
              apoyándolos y difundiendo su trabajo y su cultura :){" "}
            </p>
        </div>

          <div className="swiper-slide box">
            <img src="images/mauricio Galeano.jpeg" alt=""/>
            <h3>Mauricio Galeano</h3>
            <p>
              Muy bonitas las artesanías y todo, pero en realidad lo que estoy
              buscando es a alguien que me quiera de verdad. :({" "}
            </p>
          </div>
          <div className="swiper-slide box">
            <img src="images/Socrates.png" alt=""/>
            <h3>Sócrates Muñoz</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              laborum voluptates voluptate fugiat est aperiam commodi nulla
            </p>
        </div>

          <div className="swiper-slide box">
            <img src="images/vladimir.jpeg" alt=""/>
            <h3>Vladimir Imbachi</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique
              facere hic.
            </p>
            <div>
        </div>
      </div>
      </>
      );
};

export default Calificaciones;
