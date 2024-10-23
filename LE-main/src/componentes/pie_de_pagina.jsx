import React from 'react'
import { Link } from "react-router-dom"
import img from '../Imagenes/img.png'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Pie_de_pagina(){
 return (
   <div className="footer">
      <div className="container fluid">
         <div className="row mx -auto">
            <div className="text-center mx-auto">
               <h2 className="encabezado mt-5 pt-4">Trabaja con nosotros</h2>
               <img src={img} alt="imagen" width={300}/>
               <h4 className="encabezado">L.E</h4>
               <p className="px-3">
                  <small>
                     Lo que nos hace superior a los demas es que creamos una comunidad dinámica y colaborativa donde cada usuario no solo diseña sus propias prendas, sino que también puede compartir sus creaciones en la plataforma.
                  </small>
               </p>
               <section className="text-center pb-4">
                  <button type="button" class="btn btn-outline-light">Conoce más</button>
               </section>
            </div>
            <div className="text-center mx-auto">
               <h2 className="encabezado mt-3 pt-3">
                  <span className="text-">Create your style</span>
               </h2>
               <p className="px-3">
                  <small>
                     <strong>
                        Siguenos en nuestras redes para mas contenido!
                     </strong>
                  </small>
               </p>
              <div>
                 <p><a href="">Instagram    <FaInstagram /></a></p>
              </div>
               <div>
                    <p><a href="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des">Tiktok     < FaTiktok  /></a></p>
                 </div>
               <div>
                    <p><a href="">Youtube    < FaYoutube  /></a></p>
                  </div>
               <div id="copyright">
                  <hr/>
               <p><small> L.E Todos sus derechos    </small>  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
  );
}

export default Pie_de_pagina;