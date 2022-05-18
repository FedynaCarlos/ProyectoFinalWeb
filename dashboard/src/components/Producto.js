//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';

//Importar nuestro componente
import ProductList from "./ProductList";

class Producto extends Component{
    constructor(){
        super()
        this.state ={
            productos : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('api/productos')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(productos =>{
            this.setState({productos: productos.prueba})
        })
        .catch(error => console.log(error))
    }

    render(){
        return (
          <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <div>
              <h1 className="h3 mb-2 text-gray-800 "
              style={{textAlign:'center'}}>
                Todos nuestros productos
              </h1>
              {/*<!-- DataTales Example -->*/}
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                    >
                      <thead>
                        <tr className="table-secondary">
                          <th>Id</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Categoria</th>
                          <th>Descripción</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr className="table-secondary">
                          <th>Id</th>
                          <th>Nombre</th>
                          <th>Precio</th>
                          <th>Categoria</th>
                          <th>Descripción</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {
                          //console.log(this.state.movies)
                          this.state.productos.map((producto, index) => {
                            return <ProductList {...producto} key={index} />;
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}

export default Producto;
