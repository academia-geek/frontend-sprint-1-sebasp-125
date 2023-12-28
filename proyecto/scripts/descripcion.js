console.log("...........")
const img_principal = document.getElementById("img_principal")
const content_general = document.getElementById("content_general")
const content_general_gatos = document.getElementById("content_general_gatos")

const content_2 = document.getElementById("content_2")

//SessionStorage
const recibe = localStorage.getItem('Envia_id_perro')
const recibe_gato = localStorage.getItem('Envia_id_gato')
const PerroGato = localStorage.getItem('perroGato')
console.log(PerroGato)

console.log("Gatos: " , recibe_gato)
console.log("Perros: " , recibe)

//Favoritos
const favoritos = document.getElementById("favoritos")

//-----------------------Perros---------------------
const FetchData = async () => {
    try {
        const response = await axios.get('https://adopcion.onrender.com/perros')
        return response;
    } catch (Error) {
        console.log(Error)
    }
}



let contador_perro = 0
async function Descripcion() {
    
    contador_perro++
    const DatosPerros = await FetchData();
    content_general.innerHTML = '';
    for (let i = 0; i < DatosPerros.data.length; i++) {
        if (recibe == DatosPerros.data[i].id) {
            content_general.innerHTML = `
            <img class="img_class"  src="${DatosPerros.data[i].url}" alt="${i}">
            <h2 class="">${DatosPerros.data[i].nombre}</h2>
            <p class="#">${DatosPerros.data[i].raza}</p>
            <p class="#">Edad: ${DatosPerros.data[i].edad}</p>
            <p class="#">Descripcion: ${DatosPerros.data[i].descripcion}</p>
            <p class="#">Personalidad: ${DatosPerros.data[i].personalidad}</p>
            `

    }   
}
}
Descripcion()
//----------------------------Gatos---------------------------
const FetchData_Gatos = async () => {
    try {
        const response = await axios.get('https://adopcion.onrender.com/gatos')
        return response;
    } catch (Error) {
        console.log(Error)
    }
} 

async function Descripcion_Gatos() {
    const Datos = await FetchData_Gatos();
    console.log(Datos)
    for (let i = 0; i < Datos.data.length; i++) {
        if (recibe_gato == Datos.data[i].id){
            content_general.innerHTML = `
            <div class="content_img">
            <img class="img_class" src="${Datos.data[i].url}" alt="${i}">
            </div>
            <h2 class="nombre_class">${Datos.data[i].nombre}</h2>
            <p class="raza">${Datos.data[i].raza}</p>
            <p class="parrafo">Edad: ${Datos.data[i].edad}</p>
            <p class="parrafo">Descripcion: ${Datos.data[i].descripcion}</p>
            <p class="parrafo">Personalidad: ${Datos.data[i].personalidad}</p>
            `
        }
    }
}
//--------------------------------------------------------------------------
if(PerroGato ==  'gato') {
    Descripcion_Gatos()
} else {
    Descripcion()
}

//Favoritos
function fav() {
   localStorage.setItem('gato_rec' , recibe_gato)
   localStorage.setItem('perro_rec' , recibe)
   window.location.href = "favoritos.html"
}