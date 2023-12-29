const recibe_gato = localStorage.getItem('gato_rec');
const recibe_perro = localStorage.getItem('perro_rec');

const PerroGato = localStorage.getItem('perroGato')
const content_fav = document.getElementById('content_fav');
const content_pru = document.getElementById("content_pru")

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
            `<img class="img_class" src="${Datos_Gatos.data[i].url}" alt="${i}">`
            let comp_id = Datos_Gatos.data[i].id
            localStorage.setItem('miContador', comp_id); 
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
            `<img class="img_class" src="${Datos_Gatos.data[i].url}" alt="${i}">`
      
        }  
}

}



async function new_cat () {
    var contador = localStorage.getItem('miContador');
    console.log(contador)
const Datos_Gatos = await Fetch_Gatos()
    for (let i = 0; i < Datos_Gatos.data.length; i++) {
        content_pru.innerHTML = 
        `<img class="img_class" src="${Datos_Gatos.data[contador].url}" alt="${i}">`
        }
}
var contador = localStorage.getItem('miContador');

if (contador != recibe_gato){
    console.log("paso")
    new_cat()
}

if (PerroGato == 'perro') {
    Fav_Perros()
} else if (PerroGato == 'gato'){
    new_cat()
    Fav_gatos()
}