import React ,{useEffect, useState} from 'react';
import Cepa  from './Cepa';


function CepasInDb () {

  const [cepa,setCepas] = useState([])

    useEffect( ()=>{
      fetch('api/cepas')
          .then( respuesta => {
              return respuesta.json()
          })
          .then(cepa => {
            setCepas(cepa.data)
          })
    }, [])

        return (
          <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4 ">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-gray-800">
                    Cepas de nuestros vinos
                  </h6>
                </div>
                <div className="card-body1 ">
                  <div className="row">
                    {cepa.map((cepa, index) => {
                      return <Cepa {...cepa} key={index} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }

export default CepasInDb;