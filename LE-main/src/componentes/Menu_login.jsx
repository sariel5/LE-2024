import React from "react";
import { Link } from "react-router-dom";

function Menu_login() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" style={{ background: "#f0e7e7" }}>
          <Link class="navbar-brand" to="inicio_sesion">
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
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Perfil
                </a>
                <ul class="dropdown-menu">
                  <Link to="/Crea_tus_diseños">
                    <li>
                      <a class="dropdown-item">Crea tus diseños</a>
                    </li>
                  </Link>
                  <Link to="/Tus_diseños">
                    <li>
                      <a class="dropdown-item">
                        Mis diseños
                      </a>
                    </li>
                  </Link>
                  
                  <Link to="/Datos_del_usuario_">
                    <li>
                      <a class="dropdown-item">
                        Datos del usuario
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link  active" to="/Contactanos_login">
                  Contactanos
                </Link>
              </li>

              <li class="nav-item  ">
                <Link class="nav-link  active" to="/inicio_sesion">
                  Inicio
                </Link>
              </li>
              
              <li class="nav-item  ">
                <Link class="nav-link  active" to="/">
                  Cerrar Sesion
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
            <strong>
              Bienvenido a Lebensdauer Elixir -libera tu esencia en diseños de
              ropa
            </strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#f9f9f9" }}>
            <h4 className="encabezado fst-italic">
              Descubre un mundo donde tu estilo es único
            </h4>
            <p classname="card-text Garamond">
              En Lebensdauer Elixir, puedes personalizar camisetas, jeans,
              zapatos y más, eligiendo tamaños, colores, telas y diseños a tu
              gusto. Crea, comparte e inspírate con una comunidad de apasionados
              por la moda. ¡Haz que cada prenda sea verdaderamente tuya!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu_login;
