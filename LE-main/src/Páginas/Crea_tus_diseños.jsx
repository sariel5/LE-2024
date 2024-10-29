import React, { useState } from "react";
import Menu_login from "../componentes/Menu_login";
import img2 from "../Imagenes/img2.jpg";

function Crea_tus_diseños() {
  const [color, setColor] = useState("");
  const [tela, setTela] = useState("");
  const [talla, setTalla] = useState("");
  const [diseño, setDiseño] = useState("");

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  const handleTelaChange = (selectedTela) => {
    setTela(selectedTela);
  };

  const handleTallaChange = (selectedTalla) => {
    setTalla(selectedTalla);
  };

  const handleDiseñoChange = (selectedDiseño) => {
    setDiseño(selectedDiseño);
  };

  const handleGuardar = () => {
    // Lógica para guardar el diseño
    console.log("Diseño guardado");
  };

  const handleCancelar = () => {
    // Lógica para cancelar la personalización del diseño
    console.log("Personalización cancelada");
  };

  const handleQuitar = () => {
    // Lógica para quitar un elemento del diseño
    console.log("Elemento quitado del diseño");
  };

  return (
    <div className="Crea_tus_diseños">
      <Menu_login />
        <div>
          {/* Componentes para elegir colores, tela, tallas, diseños */}
          <select onChange={(e) => handleColorChange(e.target.value)}>
            <option value="">Seleccione un color</option>
            <option value="Rojo">Rojo</option>
            <option value="Azul">Azul</option>
            <option value="Verde">Verde</option>
          </select>

          <select onChange={(e) => handleTelaChange(e.target.value)}>
            <option value="">Seleccione una tela</option>
            <option value="Algodón">Algodón</option>
            <option value="Poliéster">Poliéster</option>
            <option value="Lino">Lino</option>
          </select>

          <select onChange={(e) => handleTallaChange(e.target.value)}>
            <option value="">Seleccione una talla</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>

          <select onChange={(e) => handleDiseñoChange(e.target.value)}>
            <option value="">Seleccione un diseño</option>
            <option value="Estampado">Estampado</option>
            <option value="Bordado">Bordado</option>
            <option value="Lisa">Lisa</option>
          </select>
        </div>
        <img src={img2} alt="img2" style={{ maxWidth: "20xp" }}></img>
      <div className="card-body">
        <h5 className="card-title">Camisetas</h5>

        <button onClick={handleGuardar}>Guardar</button>
        <button onClick={handleCancelar}>Cancelar</button>
        <button onClick={handleQuitar}>Quitar</button>
      </div>
    </div>
  );
}

export default Crea_tus_diseños;
