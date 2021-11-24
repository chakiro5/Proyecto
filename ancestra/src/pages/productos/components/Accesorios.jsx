import Producto from "./Producto";
import img from "../../assets/images/aretes-1.jpg";
const Accesorios = () => {
  return (
    <>
    <div className="container">
      <header className="title">
        <h2>
          Accesorios <span>decorativos</span>
        </h2>
        <p>
          Lorem ipsum Dolor et reprehenderit laborum deserunt aliquip incididunt
          tempor id non. Lorem ipsum Fugiat anim labore cupidatat consequat non
          in sit dolore anim anim consequat nisi.
        </p>
      </header>
    </div>
    <Producto 
    nombre ="Aretes Filigrana" 
    diseñador="comunidad" 
    comunidad="Emberá" 
    vendedor="Vladimir Imbachi" 
    contacto_vendedor="310 406 7006" 
    precio="$25000"
    img={img}
    descripcion="Acá va la información y características del producto"
    />

    </>
  );
};

export default Accesorios;
