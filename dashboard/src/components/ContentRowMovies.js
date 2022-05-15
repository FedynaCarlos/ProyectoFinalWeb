import React from 'react';
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
  //<FontAwesomeIcon icon="fa-light fa-wine-glass-empty" />
};

let user = {
    color:   "warning",
    titulo: "Total de Cepas",
    valor: 8,
    icono: "fa-solid fa-wine-glass",
    
}

let cardProps = [productInDataBase,amount,user];


function ContentRowMovies(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowMovies;