import React from "react";
import imagen from '../assets/images/roto404.gif'
import imagen2 from "../assets/images/bienvenido_bodega_g5.jpg";

function Error404(){
    return (
      <React.Fragment>
        <div className=" containerD ">
          <div className="text404">404</div>

          <section className="not-found">
            <section className="nfImag">
              <img src={imagen} className="w-100" alt="romper" />
            </section>
            <section className="nfs1">
              <h2>Upsssss</h2>
              <h4>La página que intentas solicitar no está en el servidor </h4>
              <p>Prueba mejor suerte con este link:</p>
              <ul className="listRedirection">
                <li>
                  <a href="/">Home</a>
                </li>
              </ul>
              <p>Siempre eres bienvenido(a) a nuestro sitio</p>
              <div className="imgBienvenidaPpal">
                <img src={imagen2} className="imgBienvenida" alt="romperb" />
              </div>
            </section>
          </section>
        </div>
      </React.Fragment>
    );
}

export default Error404;