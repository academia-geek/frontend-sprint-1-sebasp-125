console.log("...........")
const img_principal = document.getElementById("img_principal")
const content_general = document.getElementById("content_general")
const content_general_gatos = document.getElementById("content_general_gatos")


//SessionStorage
const recibe = localStorage.getItem('Envia_id_perro')
const recibe_gato = localStorage.getItem('Envia_id_gato')

const PerroGato = localStorage.getItem('perroGato')
console.log(PerroGato)

console.log("Gatos: " , recibe_gato)
console.log("Perros: " , recibe)


//-----------------------Perros---------------------
const FetchData = async () => {
    try {
        const response = await axios.get('https://adopcion-alpha.vercel.app/perros')
        return response;
    } catch (Error) {
        console.log(Error)
    }
}



let contador_perro = 0
async function Descripcion() {
    
    contador_perro++
    const Datos = await FetchData();
    content_general.innerHTML = '';
    //console.log(Datos.data)
    for (let i = 0; i < Datos.data.length; i++) {
        if (recibe == Datos.data[i].id) {
            content_general.innerHTML = `
            <div class="content_img">
            <img class="img_class"  src="${Datos.data[i].url}" alt="${i}">
            </div>
            <h2>${Datos.data[i].nombre}</h2>
            <p class="parrafo">${Datos.data[i].raza}</p>
            <p class="parrafo">Edad: ${Datos.data[i].edad}</p>
            <p class="parrafo">Descripcion: ${Datos.data[i].descripcion}</p>
            <p class="parrafo">Personalidad: ${Datos.data[i].personalidad}</p>
            `

    }   
}
}
Descripcion()
//----------------------------Gatos---------------------------
const FetchData_Gatos = async () => {
    try {
        const response = await axios.get('https://adopcion-alpha.vercel.app/gatos')
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

