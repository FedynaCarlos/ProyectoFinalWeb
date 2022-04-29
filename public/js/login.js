
window.addEventListener("load", function () {
  let formulario = document.querySelector(".create-user");

  formulario.addEventListener("submit", function (e) {
    let campoEmail = document.querySelector("#email");
    console.log(campoEmail);

    let emailReg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!emailReg.test(campoEmail.value)) {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El e-mail " + campoEmail.value + " no es e-mail valido",
    }); 
    }


    
  });
});
