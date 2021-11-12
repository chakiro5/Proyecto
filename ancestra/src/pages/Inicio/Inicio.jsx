import React from "react";
import NavBar from "../../components/NavBar";
import Home from "./components/Home";
const Inicio = () => {
  return (
    <div className="p-3 pm-md-4 mx-auto text-center">
      <NavBar />
      <Home />
    </div>
  );
};

export default Inicio;
