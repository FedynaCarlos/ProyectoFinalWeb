import React from 'react';
import imagenFondo from '../assets/images/LaConsulta.jpg';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Nuestro producto estrella</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 10 +'rem'}} src={imagenFondo} alt=" Vino estrella "/>
                    </div>
                    <p>Durante este proyecto, a parte de aprender todo lo relacionado con el desarrollo web, encontramos equipo de trabajo y un grupo de amigos que hacen del proyecto una experiencia igan de compartir una botella de vino.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del Producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
