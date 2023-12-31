const usuario = document.getElementById("usuario")

//btn Guardar
const guardar =document.getElementById("guardar");

//Llamado de los Input
const nombre_id = document.getElementById("nombre_id")
const apellido_id = document.getElementById("apellido_id");
const correo_id = document.getElementById("correo_id")
const usuario_id = document.getElementById("usuario_id")

//Llamado de los Div "content"
const content_form = document.getElementById("content_form")

usuario.addEventListener("click" , function() {
    window.location.href = "perfil.html"
})


//Funcionalidad del Footer
const home = document.getElementById("home")
const mensajes = document.getElementById("mensaje") 
const corazon = document.getElementById("corazon")

home.addEventListener("click" , function(){
    window.location.href = "Adopcion_Mascotas.html"
})

mensajes.addEventListener("click" , function(){
    window.location.href = "mensajes.html"
})

corazon.addEventListener("click", function (){
    window.location.href = "favoritos.html"
})





//LLamando el Data.json

const FetchData = async () => {
    try {
        const response = await axios.get('https://adopcion.onrender.com/registro')
        return response
       
    } catch (Error) {
        console.log(Error);
    }
}

async function FetchData_Datos() {
    let Data = await FetchData();
   for (let i = 0; i < Data.data.length; i++) {
        nombre_id.value = `${Data.data[i].nombre_u}`
        apellido_id.value = `${Data.data[i].apellido_u}`
        correo_id.value = `${Data.data[i].correo_u}`
   }
}

async function guardarDatos() {
    const nuevoNombre = nombre_id.value;
    const nuevoApellido = apellido_id.value;
    const nuevoCorreo = correo_id.value;
    console.log("Entro a Try");
    try {
        const response = await axios.put(`https://adopcion.onrender.com/registro/2` , {
            'nombre_u': nuevoNombre,
            'apellido_u': nuevoApellido,
            'correo_u': nuevoCorreo
        });
        console.log('Datos actualizados correctamente:', response.data);
    } catch (Error) {
        console.error("No se puede Editar." , Error);
    }
}



guardar.addEventListener('click' , function() {
    guardarDatos()
})
FetchData_Datos()