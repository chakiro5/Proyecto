import Inicio from "./pages/inicio/Inicio";
import Productos from "./pages/productos/Productos";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Inicio/>
      <Productos/>
      <Footer/>
    </div>
  );
}

export default App;
