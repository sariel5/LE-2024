import React from "react" 
import img from "../Imagenes/img.png"
import { Link } from "react-router-dom"
function Portada() {
  return (
    <div className= "container">
      <div clasName= "row">
        <img src= {img} alt="logo" style={{maxWidth:"460px" }}></img>
        <div className= "mx-auto">
          <p className="text-center"> Registrate para crear tu ropa 
             segun tu estilo  
          </p>
        </div>
        <Link to="/registro">
          <div class="d-grid gap-2 col-6 mx-auto pb-1">
            <button class="btn btn-dark"type="button">Registrate</button>
          </div>
        </Link>
        
      <Link to="/login">
        <div class="d-grid gap-2 col-6 mx-auto pb-3">
          <button class="btn btn-dark" type="button">Iniciar sesion</button>
        </div>
      </Link>
       
      </div>
    </div>
  );    
}

export default Portada;