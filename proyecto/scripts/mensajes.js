//Funcionalidad del Footer
const home = document.getElementById("home")
const mensajes = document.getElementById("mensaje") 
const corazon = document.getElementById("corazon")
const usuario = document.getElementById("usuario")

home.addEventListener("click" , function(){
    window.location.href = "Adopcion_Mascotas.html"
})

mensajes.addEventListener("click" , function(){
    window.location.href = "mensajes.html"
})

usuario.addEventListener("click", function () {
    window.location.href = "perfil.html"
})

corazon.addEventListener("click", function (){
    window.location.href = "corazon.html"
})


