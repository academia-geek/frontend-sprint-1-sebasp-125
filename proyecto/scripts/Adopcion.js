const content_gatos_id = document.getElementById("content_gatos_id")
const content_perros_id = document.getElementById("content_perros_id")
const content_cuadros_img_id = document.getElementById("content_cuadros_img_id")
const content_cuadros_img_id_perros = document.getElementById("content_cuadros_img_id_perros")

//Mandando las Imaganees de las dos mascotas, dependiendo del Json y el For.
const content_cuadros_img = document.getElementById("content_cuadros_img")
const content_cuadros_img_id_gatos = document.getElementById("content_cuadros_img_id_gatos")




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








//---------------Cambio de Imaganes depende de la Eleccion del Usuario--------------
content_cuadros_img_id_gatos.style.display = "none"
content_gatos_id.addEventListener("click", function () {
    //Desaparecemos los cuadros anteriores "la de los Perros"
    content_cuadros_img_id_perros.style.display = "none"

    //Aparecemos los cuadros de los Gatos.
    content_cuadros_img_id_gatos.style.display = "flex"
})

content_perros_id.addEventListener("click", function () {
    //Desaparecemos los cuadros anteriores "la de los gatos"
    content_cuadros_img_id_gatos.style.display = "none"

    //Aparecemos los cuadros anteriores "la de los Perros"
    content_cuadros_img_id_perros.style.display = "flex"
})
//---------------------------------------------------------
//Llamando al Json Vercel de los Perros.
const FetchData_perros = async () => {
    try {
        const response = await axios.get("https://adopcion-alpha.vercel.app/perros")
        return response;
    } catch (Error) {
        console.log("Error")
    }
}

//Aqui volvemos Asnyc el Console.log. o el mostrar en el HTMl
async function Datos_Asnyc() {
    const Datos = await FetchData_perros()
    //console.log(Datos.data[0])
    for (let i = 0; i < Datos.data.length; i++) {
        content_cuadros_img_id_perros.innerHTML +=
            `<div class="content_cuadros_img" id="content_cuadros_img_id_perros">
        <img class="cuadros_class" id="${Datos.data[i].id}" src="${Datos.data[i].url}" alt="Imagen ${i}">
    </div>`
    }
}
//------------------------------------------------------------------
//Llamando al Json Vercel de los Gatos.
const FetchData_gatos = async () => {
    try {
        const response = await axios.get("https://adopcion-alpha.vercel.app/gatos")
        return response;
    } catch (Error) {
        console.log("Error")
    }
}
async function Datos_Asnyc_Gatos() {
    const Datos = await FetchData_gatos();
    for (let i = 0; i < Datos.data.length; i++) {
        content_cuadros_img_id_gatos.innerHTML += 
        `<div class="content_cuadros_img" id="content_cuadros_img_id_gatos">
        <img class="cuadros_class" id="${Datos.data[i].id}" src="${Datos.data[i].url}" alt="Imagen ${i}">
    </div>`
    }
}

Datos_Asnyc()
Datos_Asnyc_Gatos()

//----------Descripcion de los animales-----------
document.addEventListener("click", async ({ target }) => {
    if (target.classList.contains('cuadros_class')) {
        console.log("Paso la funcion If")
        try {
            const IdPerro = target.id;
            localStorage.setItem("Envia_id_perro", IdPerro);
            localStorage.setItem("perroGato" , 'perro')
            window.location.href = "descripcion.html"
        } catch (Error) {
            console.log(Error.message)
        }
    }
})

content_gatos_id.addEventListener('click', function () {

    console.log("Entro a Gatos")
    document.addEventListener('click', async ({ target }) => {
        if (target.classList.contains('cuadros_class')) {
            console.log("paso el if")
            try {
                const IdGato = target.id;
                localStorage.setItem("Envia_id_gato", IdGato);
                localStorage.setItem("perroGato" , 'gato')
                window.location.href = "descripcion.html"
            } catch (Error) {

            }
        }
    })

})
