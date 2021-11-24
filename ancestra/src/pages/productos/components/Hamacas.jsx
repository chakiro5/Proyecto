import Producto from "./Producto";
import img from "../../assets/images/FOTO WEB 1.jpg";
const Hamacas = () => {
  return (
    <>
      <div className="container">
        <header className="title">
          <h2>
            Hamacas y <span>Mochilas</span>
          </h2>
          <p>
            Lorem ipsum Dolor et reprehenderit laborum deserunt aliquip
            incididunt tempor id non. Lorem ipsum Fugiat anim labore cupidatat
            consequat non in sit dolore anim anim consequat nisi.
          </p>
        </header>
      </div>
      <Producto
        nombre="Hamaca de San Jacinto"
        diseñador="comunidad"
        comunidad="Nukak Makuk"
        vendedor="José Gómez"
        contacto_vendedor="350 668 4061"
        precio="$780000"
        img={img}
        descripcion="Acá va la información y características del producto"
      />
      </>
  );
};
export default Hamacas;
