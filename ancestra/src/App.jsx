import React from "react";
import Inicio from "./pages/inicio/Inicio";
import Productos from "./pages/productos/Productos";
import NavBar from "./components/NavBar"
function App() {
  return (
    <div className="App">
       <Inicio/>
       <Productos/>
       <NavBar/>
    </div>
  );
}

export default App;
