const recibe_gato = localStorage.getItem('gato_rec');
const recibe_perro = localStorage.getItem('perro_rec');

const content_fav = document.getElementById('content_fav');


if (recibe_gato !== null || recibe_perro !== null ) {
    // El valor existe
    console.log(recibe_gato);
    console.log(recibe_perro);
} else {
    // El valor no existe o es null
    console.log('El valor no está definido en localStorage');
}

const Fetch_Gatos  = async () => {
    try {
        const response = await axios.get('https://adopcion-alpha.vercel.app/gatos')
        return response;
  
    } catch (Error) {
console.log("No se puede Acceder a la Base de Gatos ", Error)
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
        }  
}

}

Fav_gatos()