import React from "react";
import "../estilo/index.css";
import Pie_de_pagina from "../componentes/pie_de_pagina";
import { Link } from "react-router-dom";
function Ini() {
  return (
    <div className="app">
      <header className="header">
        <div className="login-section">
          <h2> Iniciar Sesión</h2>
          <form>
            <div>
              <label>Usuario:</label>
              <input type="text" name="lebensdauer@gmail.com"></input>
            </div>
            <div>
              <label>Contraseña:</label>
              <input type="password" name="password>"></input>
            </div>

            <Link to="/inicio_sesion">
              <button type="submit"> Iniciar Sesión</button>
            </Link>
          </form>
        </div>
        <div className="info-section">
          <h2>NUESTRO SERVICIO</h2>
          <p>
            Lebensdauer Elixir le brinda al cliente la oportunidad de ser su
            propio diseñador de moda desde la comunidad de su pc o celular
            teniendo la oportunidad de crear y modificar a su gusto los
            diferentes estilos de prendas que ofrecemos, Hoodies, Camisetas,
            Sudaderas, Pantalonetas Bermudas e incluso Zapatos.
          </p>
        </div>
      </header>
      <Pie_de_pagina />
    </div>
  );
}

export default Ini;
