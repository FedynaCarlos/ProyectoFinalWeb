window.onload = function(){ 
  let editForm = document.querySelectorAll(".btnActualizar");
  const formulario = document.getElementById("formulario");
  const inputs = document.querySelectorAll("#formulario input");
  

  const campos = {
    nombres: true,
    apellidos: true,
    telefono: true,
    fechaNac: true
  };

  

   const validarFormulario = (e) => {
    //console.log(e.target.name);
    switch (e.target.name) {
      case "nombres":
        validarCampo(expresiones.nombres, e.target, "nombres");
        break;
      case "apellidos":
        validarCampo(expresiones.apellidos, e.target, "apellidos");
        break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target, "telefono");
        break;
      case "fechaNac":
        validarCampo(expresiones.fechaNac, e.target, "fechaNac");
        break;
        case "avatar":
          console.log(avatar.value);
        image.addEventListener("input", function () {
            if (avatar.files.length == 0) {
              Swal.fire("Sin Imagen?", "Por favor selecciona una imagen", "question");
              //alert("Debe cargar una imagen");
            } else if (avatar.value) {
              fileName = avatar.value;
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

   const expresiones = {
    email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i, // Letras y numeros sin espacios, y @.
    telefono: /^\d+$/, //Solo numeros, obligatorio
    nombres: /^[a-zA-ZÀ-ÿ0-9\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ0-9\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    
  };

  console.log(campos.nombres);
  console.log(campos.apellidos);
  console.log(campos.telefono);
  console.log(campos.fechaNac);



  formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    if (campos.nombres && campos.apellidos && campos.telefono && campos.fechaNac) {
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