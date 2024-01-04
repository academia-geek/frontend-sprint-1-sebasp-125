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

const respuestasAleatorias = [
    "¡Hola! ¿Estás interesado en adoptar una mascota?",
    "Eso suena genial. ¿Ya tienes alguna preferencia en cuanto a la especie o tamaño?",
    "¿Alguna pregunta específica sobre el proceso de adopción?",
    "No entiendo completamente, ¿puedes proporcionar más detalles sobre lo que estás buscando?",
    "Recuerda que la adopción es una gran manera de darle un hogar a una mascota necesitada.",
    "¡Qué emocionante! ¿Cómo te sientes acerca de tener una nueva mascota?",
    "Si necesitas información sobre requisitos de adopción, estoy aquí para ayudar.",
    "¡Excelente elección! ¿Te gustaría saber más sobre nuestras mascotas disponibles?",
    "¿Puedo ayudarte con algo más relacionado con la adopción de mascotas?",
    "¿Excelente y tu?"
];


function obtenerRespuestaAleatoria() {
    return respuestasAleatorias[Math.floor(Math.random() * respuestasAleatorias.length)];
}

function msgMostrar() {
    let mensaje = messageInput.value;

    if (mensaje === "") {
        alert('No puedes enviar un mensaje vacío');
    } else {
        // Agregamos el mensaje del usuario al HTML
        contenedor_msg_id.innerHTML += 
        `<span>${horaFormateada}</span>
        <div class="content_entrada_div">
            <div class="content_entrada">
                <p>${mensaje}</p>
            </div>
        </div>`;

        

        let respuesta = obtenerRespuestaAleatoria();
        contenedor_msg_id.innerHTML += 
        `<span>${horaFormateada}</span>
        <div class="content_entrada_div_salida">
            <div class="content_salida">
                <p>${respuesta}</p>
            </div>
        </div>`;

        messageInput.value = "";
    }
}

  


messageInput.addEventListener("keydown", function() {
    if (event.key === "Enter") {
        msgMostrar()
    }
})