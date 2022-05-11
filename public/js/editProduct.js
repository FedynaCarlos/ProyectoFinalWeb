window.addEventListener("load", function () {
  let editForm = document.querySelectorAll(".btnActualizar");
  console.log(editForm);
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
});
