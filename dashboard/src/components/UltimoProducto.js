import React from "react";

function ultimoProducto(props) {
  return (
    <React.Fragment>
      <div className="text-center">
        <p>{props.nombre}</p>
      </div>
    </React.Fragment>
  );
}

export default ultimoProducto;
