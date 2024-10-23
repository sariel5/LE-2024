import React from 'react'
import Menu_login from '../componentes/Menu_login'

function Datos_del_usuario() {
  return (
    <div className='Datos_del_usuario'>
      <Menu_login/>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-     label">Nombre completo</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </input>
        </div>
      </form>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-     label">Correo electronico</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </input>
        </div>
      </form>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-     label">Numero de telefono</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </input>
        </div>
      </form>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-     label">Direccion de envio</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </input>
        </div>
      </form>
    </div>
  );
}

export default Datos_del_usuario