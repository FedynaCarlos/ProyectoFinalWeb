window.onload = function(){
    let formulario = document.querySelector("form.create-user");
    formulario.addEventListener("submit",function(e) {
    e.preventDefault();
        
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

    let campoEmail = document.querySelector("#email");   
    if(campoEmail.value == ""){
      alert("El campo email no puede estar vacio");
        }

    let campoFecha = document.querySelector("#fechaNac");   
    if(campoFecha.value == ""){
        alert("El campo fecha no puede estar vacio");
        }  
        
    let campoTelefono = document.querySelector("#telefono");   
    if(campoTelefono.value == ""){
        alert("El campo telefono no puede estar vacio");
        }   
    
    let campoImagen = document.querySelector("#avatar");   
    if(campoImagen.value == ""){
    alert("El campo imagenes no puede estar vacio ademas las imagenes deben estar en formatos JPG, JPEG, PNG, GIF ");
         }
    
    let campoPassword = document.querySelector("#password");   
    if(campoPassword.value == ""){
    alert("La contraseña no puede estar vacio");
    }else if(campoPassword.value.length < 8){
    alert("El campo contraseña debe tener al menos 8 caracteres");     
    //if(errores.length > 0) {
        e.preventDefault();
//let ulErrores = document.querySelector("div.errores ul");
  //      for (let i = 0; i < errores.length; i++) {
    //        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"      
}
    
       });
}
    
    

/*window.addEventListener("load", function() {
    let formulario = document.querySelector("form.create-user");
    formulario.addEventListener("submit",function(e) {
        e.preventDefault();
        
        let campoNombre = document.querySelector("#nombres");
        let prueba = campoNombre.value 
console.log(prueba)
        if(campoNombre.value == "") {
 
            alert("El campo nombre no puede estar vacio")
        }
    })
});

*/