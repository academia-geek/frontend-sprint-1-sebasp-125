const messageInput = document.getElementById("messageInput");

const content_entrada = document.getElementById("content_entrada")
const msg_entrada = document.getElementById("msg_entrada")

//Generador de Hora en tiempo real.
var fechaActual = new Date();

// Extraer la hora, minutos y segundos
var horas = fechaActual.getHours();
var minutos = fechaActual.getMinutes();

var horaFormateada = horas + ':' + minutos // + ':' + segundos;

//Volver a la pagina principal
const volver = document.getElementById("volver")
volver.addEventListener('click', () => {
    window.location.href="mensajes.html"
})

const contenedor_msg_id = document.getElementById("contenedor_msg_id")
// Evento que se ejecuta cuando el usuario hace submit en el formulario de mensajes
function msgMostrar() {
    let mensaje = messageInput.value;
    if (mensaje == ""){
        alert('No puedes enviar un mensaje vacío')
    } else {
        // Agregamos el mensaje al HTML
        contenedor_msg_id.innerHTML = 
        `<span>${horaFormateada}</span>
        <div class="content_entrada_div">
            <div class="content_entrada">
                <p>${mensaje}</p>
            </div>
        </div>`
        }
    }


  


messageInput.addEventListener("keydown", function() {
    if (event.key === "Enter") {
        msgMostrar()
    }
})