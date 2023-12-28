const recibe_gato = localStorage.getItem('gato_rec');
const recibe_perro = localStorage.getItem('perro_rec');

const PerroGato = localStorage.getItem('perroGato')
const content_fav = document.getElementById('content_fav');
const content_pru = document.getElementById("content_pru")




const imagenesFavoritas_Perros = [];
const imagenesFavoritas_Gatos = []

if (recibe_gato !== null || recibe_perro !== null ) {
    // El valor existe
    console.log(recibe_gato);
    console.log(recibe_perro);
} else {
    // El valor no existe o es null
    console.log('El valor no está definido en localStorage');
}

//Imagen Favorita de Gatos
const Fetch_Gatos  = async () => {
    try {
        const response = await axios.get('https://adopcion.onrender.com/gatos')
        return response;
  
    } catch (Error) {
alert ("No se puede Acceder a la Base de Gatos ", Error)
    }
}

async function Fav_gatos() {
    const Datos_Gatos = await Fetch_Gatos()
    for (let i = 0; i < Datos_Gatos.data.length; i++) {
        if(recibe_gato == Datos_Gatos.data[i].id) {
            content_fav.innerHTML = 
            `   <div class="img" id="img">
            <img class="img_class" src="${Datos_Gatos.data[i].url}" alt="${i}">
        </div>`
        imagenesFavoritas_Gatos.push(Datos_Gatos.data[i].url)
        console.log(imagenesFavoritas_Gatos)
        }  
}
}


//Imagen Favorita de Perros
const Fetch_Perros = async () => {
    try {
        const response = await axios.get('https://adopcion.onrender.com/perros')
        return response
    }catch (Error) {
        alert ("No hay Registros de Perros", Error)
    }
}

async function Fav_Perros() {
    const Datos_Perros = await Fetch_Perros()
    for (let i = 0; i < Datos_Perros.data.length; i++) {
        if(recibe_perro == Datos_Perros.data[i].id) {
            content_fav.innerHTML = 
            `   <div class="img" id="img">
            <img class="img_class" src="${Datos_Perros.data[i].url}" alt="${i}">
        </div>`
        const ID_img_Perro = Datos_Perros.data[i].id
        localStorage.setItem("id_Perro" , ID_img_Perro)

        imagenesFavoritas_Perros.push(Datos_Perros.data[i].url)
        console.log(imagenesFavoritas_Perros)
        }  
}

}

const recupe_id_Perro = localStorage.getItem('id_Perro')
console.log(recupe_id_Perro)


if (PerroGato == 'perro') {
    Fav_Perros()
    

} else if (PerroGato == 'gato'){
    Fav_gatos()

}