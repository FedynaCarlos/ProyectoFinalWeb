import React, {useRef} from 'react';
import imagenFondo from '../assets/images/LaConsulta.jpg';

function ProductoInDb(){
    
    const parrafo = useRef()
    const cambiarColor = () => {
        parrafo.current.classList.toggle('bg-secondary')
        parrafo.current.classList.toggle("text-white");
    }
    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 onMouseOver = {cambiarColor}className="m-0 font-weight-bold text-gray-800">Nuestro producto estrella</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={imagenFondo} alt=" Vino estrella "/>
                    </div>
                    <p ref={parrafo}>Este es nuestro mejor vino, con el que celebraremos culminar esta etapa, en la que fuimos mas que compañeros somos amigos.  De ahora en adelante seremos unos apasionados por el desarrollo, acompañados siempre de una copa de vino  ¡SALUD...!</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del Producto</a>
                </div>
            </div>
        </div>
    )
}

export default ProductoInDb;
