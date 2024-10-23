import React from 'react'
import Menu from '../componentes/menu'
import Registro_usuario from '../componentes/registro_usuario'
import Formulario_Registro from '../componentes/FormularioRegistro'

function Registro(){
  return (
    <div className='Registro'>
      <Menu/>
      <Formulario_Registro/>
    </div>
  );
}

export default Registro