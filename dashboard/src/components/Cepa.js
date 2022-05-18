import React from 'react';

function Cepa(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {props.descripcion}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cepa;