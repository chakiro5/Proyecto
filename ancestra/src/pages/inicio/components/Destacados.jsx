const Destacados = () => {
    return (
        <section className="featured" id="featured">

        <h1 class="heading"> <span>PRODUCTOS DESTACADOS</span> </h1>

        <div class="swiper featured-slider">

            <div class="swiper-wrapper">

                <div class="swiper-slide box">
                    
                        
                        
                        
                    
                    <div class="image">
                        <img src="images/art-1.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Bolso de Fique</h3>
                        <div class="price">$59.000 <span>$79.000</span></div>
                        
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    <div class="image">
                        <img src="images/art-2.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Jarrón Decorativo</h3>
                        <div class="price">$49,000 <span>$59.000</span></div>
                        <a href="/" class="btn">Añadir al carrito</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    
                    
                    
                    
                    <div class="image">
                        <img src="images/art-3.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Sombrero Prensado</h3>
                        <div class="price">$59.000 <span>$69.000</span></div>
                        <a href="/" class="btn">Añadir al carrito</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    
                    
                    
                    
                    <div class="image">
                        <img src="images/art-4.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Mochila Wayú</h3>
                        <div class="price">$99.000 <span>$119.000</span></div>
                        <a href="/" class="btn">Añadir al carrito</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    
                    
                    
                    
                    <div class="image">
                        <img src="images/art-5.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Jarrón Madera</h3>
                        <div class="price">$199.000 <span>$229.000</span></div>
                        <a href="/" class="btn">Añadir al carrito</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    
                    
                    
                    
                    <div class="image">
                        <img src="images/art-6.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Zampoña Andina</h3>
                        <div class="price">$39.000 <span>$49.000</span></div>
                        <a href="/" class="btn">Añadir al carrito</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    
                    
                    
                    
                    <div class="image">
                        <img src="images/art-7.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Ruana Tradicional</h3>
                        <div class="price">$239.000 <span>$269.000 </span></div>
                        <a href="/" class="btn">Añadir al carrito</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    
                    
                    
                    
                    <div class="image">
                        <img src="images/art-8.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Olla de Barro</h3>
                        <div class="price">$69.000 <span>$79.000</span></div>
                        <a href="/" class="btn">Añadir al carrito</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    <div class="image">
                        <img src="images/art-9.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Mochila Tradicional</h3>
                        <div class="price">$49.000 <span>$69.000</span></div>
                        <a href="/" class="btn">Añadir al carrito</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    
                    <div class="image">
                        <img src="images/art-10.png" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Mochila Arhuaca</h3>
                        <div class="price">$209.000 <span>$239.000</span></div>
                        {/* <a href="/" class="btn">Añadir al carrito</a> */}
                    </div>
                </div>

            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>

        </div>

    </section>
    );
}
 
export default Destacados;