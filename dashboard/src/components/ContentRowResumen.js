import React, { Component } from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de productos",
    valor: 450,
    icono: "fa-solid fa-wine-bottle",
}

let amount = {
  color: "success",
  titulo: "Total de Usuarios",
  valor: 5,
  icono: "fa-solid fa-user-check",
};

let user = {
  color: "warning",
  titulo: "Total de Cepas",
  valor: 8,
  icono: "fa-solid fa-wine-glass",
};

let cardProps = [productInDataBase,amount,user];

class ContentRowResumen extends Component {
  constructor() {
    super();
    this.state = {
      cepaTotal: [],
      totalesUsuarios: [],
      totalesProductos: [],
    };
  }
  componentDidMount() {
    fetch("api/cepas")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((totales) => {
        this.setState({ cepaTotal: totales.data });
      })
      .catch((error) => console.log(error));

    fetch("api/usuarios")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((totalesU) => {
        this.setState({ totalesUsuarios: totalesU.prueba });
      })
      .catch((error) => console.log(error));
    fetch("api/productos")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((totalesP) => {
        this.setState({ totalesProductos: totalesP.prueba });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
          {
            cardProps.map((producto, index) => {
              cardProps[2].valor = this.state.cepaTotal.length;
              cardProps[1].valor = this.state.totalesUsuarios.length;
              cardProps[0].valor = this.state.totalesProductos.length;
            return <SmallCard {...producto} key={index} />;
          })
          }
        </div>
      </React.Fragment>
    );
  }
}

export default ContentRowResumen;