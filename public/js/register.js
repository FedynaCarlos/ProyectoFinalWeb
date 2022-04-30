/*window.onload = function(){
    let formulario = document.querySelector("form.create-user");
    formulario.addEventListener("submit",function(e) {
  

    let errores = [];
        
    let campoNombre = document.querySelector("#nombres");

        if(campoNombre.value == "") {
    errores.push("El campo nombre no puede estar vacio")
        }else if(campoNombre.value.length < 2) {
    errores.push("El campo nombre debe tener al menos 2 caracteres");        
        }

    let campoApellido = document.querySelector("#apellidos");
        if(campoApellido.value == ""){
    errores.push("El campo apellido no puede estar vacio")
        }else if(campoApellido.value.length < 2){
    errores.push("El campo apellido debe tener al menos 2 caracteres");         
        }

    let campoEmail = document.querySelector("#email");   
    if(campoEmail.value == ""){
    errores.push("El campo email no puede estar vacio");
        }

    
    let campoImagen = document.querySelector("#imagen");   
    if(campoImagen.value == ""){
    errores.push("El campo imagenes no puede estar vacio ademas las imagenes deben estar en formatos JPG, JPEG, PNG, GIF ");
         }
    
    let campoPassword = document.querySelector("#password");   
    if(campoPassword.value == ""){
    errores.push("La contraseña no puede estar vacio");
    }else if(campoPassword.value.length < 8){
    errores.push("El campo contraseña debe tener al menos 8 caracteres");     
         }
    if(errores.length > 0) {
        e.preventDefault();
let ulErrores = document.querySelector(".errores ul");

        errores.forEach(error => {
            ulErrores.innerHTML += `<li>${error}</li>`
        
    
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
