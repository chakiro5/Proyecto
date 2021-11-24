import Producto from "./Producto";
import img from "../../assets/images/flautas.jpg";
const Instrumentos = () => {
  return (
    <>
      <div className="container">
        <header className="title">
          <h2>
            Instrumentos <span>Musicales</span>
          </h2>
          <p>
            Lorem ipsum Dolor et reprehenderit laborum deserunt aliquip
            incididunt tempor id non. Lorem ipsum Fugiat anim labore cupidatat
            consequat non in sit dolore anim anim consequat nisi.
          </p>
        </header>
        </div>
        <Producto
          nombre="Quenacho"
          diseñador="comunidad"
          comunidad="Guambianos"
          vendedor="Nelsón Alejandro Garcia Morales"
          contacto_vendedor="350 668 40"
          precio="$117900"
          img={img}
          descripcion="Acá va la información y características del producto"
        />
        </>
  );
}
export default Instrumentos;
