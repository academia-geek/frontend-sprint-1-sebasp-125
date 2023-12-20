const usuario = document.getElementById("usuario")

//Llamado de los Input
const nombre_id = document.getElementById("nombre_id")
const apellido_id = document.getElementById("apellido_id");
const correo_id = document.getElementById("correo_id")

//Llamado de los Div "content"
const content_form = document.getElementById("content_form")

usuario.addEventListener("click" , function() {
    window.location.href = "perfil.html"
})



//LLamando el Data.json

const FetchData = async () => {
    try {
        const response = await axios.get('https://adopcion-alpha.vercel.app/registro')
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

FetchData_Datos()