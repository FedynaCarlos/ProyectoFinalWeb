window.onload = function(){
  let editForm = document.querySelectorAll(".btnActualizar");
  const formulario = document.getElementById("formulario");
  const inputs = document.querySelectorAll("#formulario input");
  const textArea = document.querySelector("#descripcion");
  
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
       //campos[campo] = true;
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
      // campos[campo] = false;
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

  editForm.forEach((form) => {
    form.addEventListener("click", (e) => {
     
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Actualizado con exito",
        showConfirmButton: false,
        timer: 1000,
      })
    });
  });
};
