import React from 'react'
import Menu_login from '../componentes/Menu_login'

function Tus_diseños() {
  return (
    <div className='Tus_diseños'>
      <Menu_login />
      <div className='contenedor-principal'>
        <h1>DISEÑOS</h1>
        <p>Crea y explora tu creatividad creando diseños para nuestra página o para tus prendas con la opción de modificar o elegir diseños de otros comerciantes</p>
        <div className='contenedor-diseños'>
          <div className='diseño'>
            <img src='../assets/images/diseño1.png' alt='Diseño 1'/>
          </div>
          <div className='diseño'>
            <img src='../assets/images/diseño2.png' alt='Diseño 2'/>
          </div>
          <div className='diseño'>
            <img src='../assets/images/diseño3.png' alt='Diseño 3'/>
          </div>
          <div className='diseño'>
            <img src='../assets/images/diseño4.png' alt='Diseño 4'/>
          </div>
        </div>
        <button className='boton-seleccionar'>Seleccionar</button>
        <div className='contenedor-flechas'>
          <button className='flecha izquierda'></button>
          <button className='flecha derecha'></button>
        </div>
      </div>
    </div>
    
  );
}

export default Tus_diseños;