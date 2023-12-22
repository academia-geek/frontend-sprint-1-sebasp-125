const messageInput = document.getElementById("messageInput");

const content_entrada = document.getElementById("content_entrada")
const msg_entrada = document.getElementById("msg_entrada")


const contenedor_msg_id = document.getElementById("contenedor_msg_id")
// Evento que se ejecuta cuando el usuario hace submit en el formulario de mensajes
function msgMostrar() {
    let mensaje = messageInput.value;
    if (mensaje == ""){
        alert('No puedes enviar un mensaje vacío')
    } else {
        // Agregamos el mensaje al HTML
        contenedor_msg_id.innerHTML = 
        `<span>4:36 Pm</span>
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
        parametro()
    }
})