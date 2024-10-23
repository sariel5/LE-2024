import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
          
        <div class="container-fluid"  style={{background:"#fbfcfc"}}>
          <Link class="navbar-brand" to="/">
            <i>Lebensdauer Elixir</i>
         
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/login">
                  Inicio de sesion
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  active" to="/Registro">
                  Registrate
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  active" to="/Contactanos">
                  Contactanos
                </Link>
              </li>

              <li class="nav-item  ">
                <Link class="nav-link  active" to="/">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div clasName="Container">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="¿Que necesitas?"
            aria-label="Search"
          />
          <button type="button" class="btn btn-dark">
            Buscar
          </button>
        </form>
      </div>
      <div clasName="p-3">
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#e5e8e8" }}>
            <strong>Bienvenido a Lebensdauer Elixir  -libera tu esencia en diseños de ropa</strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#f9f9f9" }}>
            <h4 className="encabezado fst-italic">Descubre un mundo donde tu estilo es único</h4>
            <p classname="card-text Garamond">Lebensdauer Elixir es una plataforma de moda donde puedes personalizar prendas como camisetas, jeans y zapatos, eligiendo tamaños, colores, telas y diseños según tus gustos. Es un espacio diseñado para aquellos que ven la moda como una forma de expresión personal y desean crear su propio estilo único.

            Nuestra página está dirigida a creativos y diseñadores emergentes, personas que buscan originalidad, emprendedores de la moda, y amantes de la moda personalizada. En Lebensdauer Elixir, puedes no solo diseñar la ropa de tus sueños, sino también compartir tus creaciones con una comunidad apasionada por la moda. Una vez que hayas creado tus piezas, puedes subirlas a la tienda en línea para que otros las descubran y las compren.

            Únete a nosotros y empieza a crear sin restricciones. En Lebensdauer Elixir, la moda se convierte en una experiencia verdaderamente personal y única. ¡Haz que cada prenda sea reflejo de tu estilo! </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
