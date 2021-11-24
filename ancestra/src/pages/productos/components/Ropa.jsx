import Producto from "./Producto";
import img from "../../assets/images/Pulsera-1.png";
const Ropa = () => {
  return (
    <>
      <div className="container">
        <header className="title">
          <h2>
            Pulseras y <span>Ropa</span>
          </h2>
          <p>
            Lorem ipsum Dolor et reprehenderit laborum deserunt aliquip
            incididunt tempor id non. Lorem ipsum Fugiat anim labore cupidatat
            consequat non in sit dolore anim anim consequat nisi.
          </p>
        </header>
      </div>
      <Producto
        nombre="Pulsera en Caña Flecha"
        diseñador="comunidad"
        comunidad="Wayú"
        vendedor="Mauricio Galeano"
        contacto_vendedor="300 5743602"
        precio="$45900"
        img={img}
        descripcion="Acá va la información y características del producto"
      ></Producto>
    </>
  );
};

export default Ropa;
