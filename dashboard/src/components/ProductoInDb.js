import React, {useRef} from 'react';
import imagenFondo from '../assets/images/LaConsulta.jpg';
import { Link } from "react-router-dom";

function ProductoInDb(){
    const parrafo = useRef()
    const cambiarColor = () => {
        parrafo.current.classList.toggle('bg-secondary')
        parrafo.current.classList.toggle("text-white");
    }
    
    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5
                onMouseOver={cambiarColor}
                className="m-0 font-weight-bold text-gray-800"
              >
                Nuestro producto estrella
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: 10 + "rem" }}
                  src={imagenFondo}
                  alt=" Vino estrella "
                />
              </div>
              <p ref={parrafo}>
                Hoy celebramos tener este proyecto funcional y culminar esta
                etapa, en la que fuimos mas que compañeros, amigos. De ahora en
                adelante seremos unos apasionados por el desarrollo, el diseño y
                las buenas practicas. Y acá nace un compromiso de siempre
                brindar por cada triunfo con una copa del mejor vino ¡SALUD...!
              </p>
              <Link className="btn btn-info" to="/Thanks">
                <span>¡Gracias...! </span>
                
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default ProductoInDb;
