import Home from "./components/Home";
import Destacados from "./components/Destacados";
import Recientes from "./components/Recientes";
import Calificaciones from "./components/Calificaciones";
import Nosotros from "./components/Nosotros";
const Inicio = () => {
  return (
    <div className="p-3 pm-md-4 mx-auto text-center">
      <Home/>
      <Destacados/>
      <Recientes/>
      <Calificaciones/>
      <Nosotros/>
    </div>
  );
};

export default Inicio;
