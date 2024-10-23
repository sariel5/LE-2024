import React from 'react'
import Menu_login from '../componentes/Menu_login';

function Contactanos_login() {
  return (
    <div className='Contactanos'>
      <Menu_login/>
      <div class="card text-center">
        <div class="card-header">
          <strong>CONTACTA CON NOSOTROS  </strong>
        </div>
        <div class="card-body">

          <p class="card-text">Si tienes alguna duda o sugerencia, no dudes en contactarnos. Estaremos encantados de ayudarte y orientarte en cualquier problema o inconveniente de la pagina.Rellena el siguiente formulario e informanos tu problema y nos pondremos en contacto contigo lo mas rapido posible para solucionar tus dudas.</p>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              <strong>
                Email address
              </strong>
            </label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"><strong>Nombre</strong></label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name example"/>

          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              <strong>
                Escribenos tu mensaje
              </strong>
            </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="d-grid gap-2 col-4 mx-auto">
            <button type="button" class="btn btn-dark">Enviar</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactanos_login;