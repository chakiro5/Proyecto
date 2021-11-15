import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/inicio/Inicio";
import Productos from "./pages/productos/Productos";
import NavBar from "./components/NavBar"
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/mostrar-productos" element={<Productos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
