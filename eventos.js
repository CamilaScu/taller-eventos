let llamandoDiv = document.getElementById("contenedor"); 
let llamandoBoton = document.getElementById("boton");


llamandoBoton.addEventListener('click', function(event){
    alert("Hola!"); 
    event.stopPropagation();
});

llamandoDiv.addEventListener('click', function(){
    alert("Hola! Soy el div");
});