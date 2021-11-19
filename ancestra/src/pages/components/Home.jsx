import React from 'react';
const Home = () => {
    return ( 
    <section className="home" id="home">

    <div class="row">

        <div className="container">
            <h3>Descuento del 25% <br/> en éstos productos.</h3>
            <p>Nunca sabes lo que quieres hasta que lo ves
                en oferta. <br/> <i>Promoción válida hasta el 15 de octubre del 2021 <br/> o hasta acabar CICLO 4</i>
            </p>
        </div>

        <div class="swiper promociones-slider">
            <div class="swiper-wrapper">
                <a href="/" class="swiper-slide"><img src="images/art-1.png" alt=""/></a>
                <a href="/" class="swiper-slide"><img src="images/art-2.png" alt=""/></a>
                <a href="/" class="swiper-slide"><img src="images/art-3.png" alt=""/></a>
                <a href="/" class="swiper-slide"><img src="images/art-4.png" alt=""/></a>
                <a href="/" class="swiper-slide"><img src="images/art-5.png" alt=""/></a>
                <a href="/" class="swiper-slide"><img src="images/art-6.png" alt=""/></a>
            </div>
            <img src="images/repisa-1.png" class="stand" alt=""/>
        </div>

    </div>

</section>  );
}
 
export default Home;