import React from 'react';

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.produc_id}</td>
                <td>{props.nombre}</td>
                <td>{props.precio}</td>
                <td>{props.categoria}</td>
                <td>{props.descripcion}</td>
            </tr>
        </React.Fragment>
    )
}

export default ProductList;