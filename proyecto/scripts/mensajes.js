//Funcionalidad del Footer
const home = document.getElementById("home")
const mensajes = document.getElementById("mensaje") 
const corazon = document.getElementById("corazon")
const usuario = document.getElementById("usuario")

const btn_mensaje = document.getElementById("btn_mensaje")

btn_mensaje.addEventListener("click" , function() {
    window.location.href = "chat.html"
})

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
    window.location.href = "favoritos.html"
})


