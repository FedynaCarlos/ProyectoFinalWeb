window.onload = function(){
  /*
  const formulario = document.getElementById('formulario');
  const inputs = document.querySelectorAll('#formulario input');
  const textArea = document.querySelector("#descripcion");
  //let nombre = document.querySelector("#nombre");

  const campos = {
    nombre: false,
    precio: false,
    descripcion: false
  }

  const validarFormulario = (e) => {
    //console.log(e.target.name);
    switch (e.target.name) {
      case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
      case "precio":
        validarCampo(expresiones.precio, e.target, "precio");
        break;
    }
  }
  
  const validarTextArea = (e) => {
    validarCampo(expresiones.descripcion, e.target, "descripcion");
  }

    const validarCampo = (expresion, input, campo) => {
      //console.log(`grupo__${campo}`);
      if(expresion.test(input.value)){
          document
            .getElementById(`grupo__${campo}`)
            .classList.remove("formulario__grupo-incorrecto");
            document
              .getElementById(`grupo__${campo}`)
              .classList.add("formulario__grupo-correcto");
            document
              .querySelector(`#grupo__${campo} i`)
              .classList.add("fa-check-circle");
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document
              .querySelector(`#grupo__${campo} .formulario__input-error`)
              .classList.remove("formulario__input-error-activo");
            campos[campo]=true;
        } else {
          document
            .getElementById(`grupo__${campo}`)
            .classList.add("formulario__grupo-incorrecto");
          document
            .getElementById(`grupo__${campo}`)
            .classList.add("formulario__grupo-correcto");
            document
              .querySelector(`#grupo__${campo} i`)
              .classList.add("fa-times-circle");
            document
              .querySelector(`#grupo__${campo} i`)
              .classList.remove("fa-check-circle");
            document
              .querySelector(`#grupo__${campo} .formulario__input-error`)
              .classList.add("formulario__input-error-activo");
            campos[campo] = false;
        }

  }



  inputs.forEach((input)=> {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener("blur", validarFormulario);
  })

  textArea.addEventListener('keyup', validarTextArea);
  textArea.addEventListener("blur", validarTextArea);

  //formulario.addEventListener('submit', (e) => {
    /*e.preventDefault();
    
    if(campos.nombre && campos.precio && campos.descripcion){
      formulario.reset();
      document
        .getElementById("formulario__mensaje-exito")
        .classList.add("formulario__mensaje-exito-activo");
    }*/


  //})

  /*
  const expresiones = {
   
    precio: /^\d+$/, //Solo numeros, obligatorio
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    descripcion: /^[a-zA-ZÀ-ÿ\s]{20,400}$/, // Letras y espacios, pueden llevar acentos.
   
  };
*/

}