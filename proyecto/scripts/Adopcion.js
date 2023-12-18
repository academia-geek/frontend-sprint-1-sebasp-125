const content_gatos_id = document.getElementById("content_gatos_id")
const content_cuadros_img_id_gatos = document.getElementById("content_cuadros_img_id_gatos")
const content_perros_id = document.getElementById("content_perros_id")
const content_cuadros_img_id = document.getElementById("content_cuadros_img_id")
const content_cuadros_img_id_perros = document.getElementById("content_cuadros_img_id_perros")




//Llamador de Variables de los Logos.
const mensaje_id = document.getElementById("mensaje_id")
const corazon_id = document.getElementById("corazon_id")
const usuario_id = document.getElementById("usuario_id")
//---------------Cambio de Imaganes depende de la Eleccion del Usuario--------------
content_cuadros_img_id_gatos.style.display = "none"
content_gatos_id.addEventListener("click" , function(){
    //Desaparecemos los cuadros anteriores "la de los Perros"
    content_cuadros_img_id_perros.style.display = "none"

    //Aparecemos los cuadros de los Gatos.
    content_cuadros_img_id_gatos.style.display = "flex"
})

content_perros_id.addEventListener("click" , function(){
    //Desaparecemos los cuadros anteriores "la de los gatos"
    content_cuadros_img_id_gatos.style.display = "none"

    //Aparecemos los cuadros anteriores "la de los Perros"
    content_cuadros_img_id_perros.style.display = "flex"
})
//----------------------------------------------------------

//-----------Descripcion de la Mascota dependiendo de la Eleccion-----------
content_cuadros_img_id.addEventListener("click", function(){
    window.location.href = "descripcion.html"
})

//-----Funciones------

function mensajes() {
    mensaje_id.addEventListener("click" , function() {
        window.location.href = "mensajes.html"
    })
}

//Llamando al Json Vercel
const FetchData = async () => {
try {
    const response = await axios.get("https://adopcion-alpha.vercel.app/perros")
    return response;
} catch (Error) {
    console.log("Error")
}

}

//Aqui volvemos Asnyc el Console.log. o el mostrar en el HTMl
async function Datos_Asnyc() {
    const Datos = await FetchData()
    //console.log(Datos.data.length)
    for (let i = 0; i < Datos.length; i++) {

        content_cuadros_img_id.innerHTML =  
         `<div class="content_cuadros_img" id="content_cuadros_img_id_perros">
        <img class="cuadros_class" id="1" src="" alt="Imagen 2">
        <img class="cuadros_class" id="2"  src="" alt="Imagen 3">
        <img class="cuadros_class" id="3"  src="" alt="Imagen 1">
        <img class="cuadros_class" id="4"  src="" alt="Imagen 1">
    </div>`
            
        }
        
    }
    

Datos_Asnyc()