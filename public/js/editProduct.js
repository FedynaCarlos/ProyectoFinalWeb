window.onload = function(){
  let editForm = document.querySelectorAll(".btnActualizar");
  const formulario = document.getElementById("formulario");
  const inputs = document.querySelectorAll("#formulario input");
  const textArea = document.querySelector("#descripcion");

  const campos = {
    nombre: true,
    precio: true,
    descripcion: true,
  };


  const validarTextArea = (e) => {
     validarCampo(expresiones.descripcion, e.target, "descripcion");
   };

   const validarFormulario = (e) => {
    //console.log(e.target.name);
    switch (e.target.name) {
      case "nombre":
        validarCampo(expresiones.nombre, e.target, "nombre");
        break;
      case "precio":
        validarCampo(expresiones.precio, e.target, "precio");
        break;
      case "image":
        console.log(image.value);
      image.addEventListener("input", function () {
          if (image.files.length == 0) {
            Swal.fire("Sin Imagen?", "Por favor selecciona una imagen", "question");
            //alert("Debe cargar una imagen");
          } else if (image.value) {
            fileName = image.value;
            (idxDot = fileName.lastIndexOf(".") + 1),
              (extFile = fileName.substr(idxDot, fileName.length).toLowerCase());
            if (
              !(extFile == "jpg" || extFile == "jpeg" || extFile == "png" || extFile == "gif")
            ) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debe cargar una imagen en formato jpg/jpeg/png/gif",
              });
            }
          }
        });
        break;
    }
  }

  const validarCampo = (expresion, input, campo) => {
     
     if (expresion.test(input.value)) {
       document
         .getElementById(`grupo__${campo}`)
         .classList.remove("formulario__grupo-incorrecto");
       document
         .getElementById(`grupo__${campo}`)
         .classList.add("formulario__grupo-correcto");
       document
         .querySelector(`#grupo__${campo} i`)
         .classList.add("fa-check-circle");
       document
         .querySelector(`#grupo__${campo} i`)
         .classList.remove("fa-times-circle");
       document
         .querySelector(`#grupo__${campo} .formulario__input-error`)
         .classList.remove("formulario__input-error-activo");
       campos[campo] = true;
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
   };

   inputs.forEach((input) => {
     input.addEventListener("keyup", validarFormulario);
     input.addEventListener("blur", validarFormulario);
   });

   textArea.addEventListener("keyup", validarTextArea);
   textArea.addEventListener("blur", validarTextArea);

   const expresiones = {
     precio: /^\d+$/, //Solo numeros, obligatorio
     nombre: /^[a-zA-ZÀ-ÿ0-9\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
     descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{20,400}$/, // Letras y espacios, pueden llevar acentos.
   };
   console.log(campos.nombre);
   console.log(campos.precio);
   console.log(campos.descripcion);
  formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (campos.nombre && campos.precio && campos.descripcion) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Actualizado con exito",
        showConfirmButton: false,
        timer: 3500,
      });
      formulario.submit();
    } else {
      Swal.fire("Debes completar la información");
    }
  });
};
