import React ,{ Component } from 'react';
import Cepa  from './Cepa';


class CepasInDb extends Component {

    constructor(){
        super()
        this.state = {
            cepaList: []
        }
    }

    componentDidMount () {

        fetch('api/cepas')
            .then( respuesta => {
                return respuesta.json()
            })
            .then(cepa => {
                console.log(cepa)
                this.setState({ cepaList: cepa.data });
            })
    }

    fondo( ){

        let fondoCaja = document.querySelector('.fondoCaja');
        fondoCaja.classList.toggle('bg-secondary');

    }

    render () {
        return (
          <React.Fragment>
            {/*<!-- Categories in DB -->*/}
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6
                    onMouseOver={this.fondo}
                    className="m-0 font-weight-bold text-gray-800"
                  >
                    Categorias de nuestros vinos
                  </h6>
                </div>
                <div className="card-body fondoCaja">
                  <div className="row">
                    {this.state.cepaList.map((cepa, index) => {
                      return <Cepa {...cepa} key={index} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }

}
export default CepasInDb;