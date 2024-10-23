import React from "react";
import Menu_login from "../componentes/Menu_login";
import img2 from "../Imagenes/img2.jpg";

function Crea_tus_diseños() {
  return (
    <div className="Crea_tus_diseños">
      <Menu_login />
      <img src={img2} alt="img2" style={{ maxWidth: "30%" }}></img>
      <div class="card-body">
        <h5 class="card-title">Camisetas</h5>
      </div>
    </div>
  );
}

export default Crea_tus_diseños;
