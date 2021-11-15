import Accesorios from "./components/Accesorios";
import Hamacas from "./components/Hamacas";
import Instrumentos from "./components/Instrumentos";
import Ropa from "./components/Ropa";

const Productos = () => {
  return (
    <div className="p-3 pm-md-4 mx-auto text-center">
      <section id="product" className="light">
        <header className="title">
          <h2>
            Nuestros <span>productos</span>
          </h2>
          <p>;
            Lorem ipsum Dolor et reprehenderit laborum deserunt aliquip
            incididunt tempor id non. Lorem ipsum Fugiat anim labore cupidatat
            consequat non in sit dolore anim anim consequat nisi.
          </p>
        </header>
      </section>
      <Accesorios/>
      <Hamacas/>
      <Instrumentos/>
      <Ropa />
    </div>
  );
};

export default Productos;
