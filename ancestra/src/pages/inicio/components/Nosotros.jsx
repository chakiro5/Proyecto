const Nosotros = () => {
    return (
        <section className="blogs" id="blogs">

        <h1 class="heading"> <span>SOBRE NOSOTROS</span> </h1>

        <div class="swiper blogs-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="images/blog-1.jpg" alt=""/>
                    </div>
                    <div class="content">
                        <h3>QUIENES SOMOS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                        <a href="/" class="btn">Leer más</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="images/blog-2.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>VENDE CON NOSOTROS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                        <a href="/" class="btn">Leer más</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="images/blog-3.jpg" alt=""/>
                    </div>
                    <div class="content">
                        <h3>NUESTRAS POLÍTICAS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                        <a href="/" class="btn">Leer más</a>
                    </div>
                </div>

            </div>

        </div>

    </section>
      );
}
 
export default Nosotros;