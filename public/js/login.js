window.addEventListener("load", function() {

    let formulario = document.querySelector(".create-user");
        formulario.addEventListener("submit",function(e) {
            e.preventDefault();
            
            let campoNombre = document.querySelector("input.name");
    
            if(campoNombre.value == "") {
    
                alert("El campo nombre no puede estar vacio")
            }
        });
    });