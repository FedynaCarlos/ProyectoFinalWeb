window.onload = function(){
    let formulario = document.querySelector("form.createProduct");
    formulario.addEventListener("submit",function(e) {
    
        
    let campoNombre = document.querySelector("#nombres");

        if(campoNombre.value == "") {
    alert("El campo nombre no puede estar vacio")
        }else if(campoNombre.value.length < 2) {
    alert("El campo nombre debe tener al menos 2 caracteres");        
        }

    let campoApellido = document.querySelector("#apellidos");
        if(campoApellido.value == ""){
    alert("El campo apellido no puede estar vacio")
        }else if(campoApellido.value.length < 2){
    alert("El campo apellido debe tener al menos 2 caracteres");         
        }
    
    let campoFecha = document.querySelector("#fechaNac");   
    if(campoFecha.value == ""){
        alert("El campo fecha no puede estar vacio");
        }  
        
    let campoTelefono = document.querySelector("#telefono");   
    if(campoTelefono.value == ""){
        alert("El campo telefono no puede estar vacio");
        }   
      
      e.preventDefault();
});     
}
