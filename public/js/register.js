/*window.onload = function(){
    let formulario = document.querySelector("form.create-user");
    formulario.addEventListener("submit",function(e) {
    e.preventDefault();
        
    let campoNombre = document.querySelector("#nombres");
    //let prueba = campoNombre.value 
//console.log(prueba)
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

    let campofechaNac = document.querySelector("#fechaNac");   
    if(campofechaNac.value == ""){
      alert("El campo fecha de nacimiento no puede estar vacio");
        }
    let campoAvatar = document.querySelector("#avatar");   
    if(campoAvatar.value == ""){
    alert("El campo imagenes no puede estar vacio ademas las imagenes deben estar en formatos JPG, JPEG, PNG, GIF ");
         }
    
    //let campoPassword = document.querySelector("#password");   
    //if(campoPassword.value == ""){
    //alert("La contraseña no puede estar vacio");
    //}else if(campoPassword.value.length < 5){
    //alert("El campo contraseña debe tener al menos 5 caracteres");     
     //    }  
    
       })
}
    
    
/*
window.addEventListener("load", function() {
    let formulario = document.querySelector("form.create-user");
    formulario.addEventListener("submit",function(e) {
        e.preventDefault();
        
        let campoNombre = document.querySelector("#nombres");
       // let prueba = campoNombre.value 
//console.log(prueba)
        if(campoNombre.value == "") {
 
            alert("El campo nombre no puede estar vacio")
        }
    })
});
*/

