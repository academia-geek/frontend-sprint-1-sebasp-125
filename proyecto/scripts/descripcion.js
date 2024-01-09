console.log("...........")
const img_principal = document.getElementById("img_principal")
const content_general = document.getElementById("content_general")
const content_general_gatos = document.getElementById("content_general_gatos")

const content2 = document.getElementById("content2")

//SessionStorage
const recibe = localStorage.getItem('Envia_id_perro')
const recibe_gato = localStorage.getItem('Envia_id_gato')
const PerroGato = localStorage.getItem('perroGato')
console.log(PerroGato)

console.log("Gatos: " , recibe_gato)
console.log("Perros: " , recibe)

//Favoritos
const favoritos = document.getElementById("favoritos")

const contactar_id = document.getElementById('contactar_id')


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
            <div class="content_img_class">
            <img class="img_class"  src="${DatosPerros.data[i].url}" alt="${i}">
            </div>
            <div class="content_name_mascota">
            <h1 class="nombre_mascota">${DatosPerros.data[i].nombre}</h1>
            </div>
            <div class="content_raza_mascota">
            <p class="raza_mascota">${DatosPerros.data[i].raza}</p>
            <p class="raza_mascota">${DatosPerros.data[i].edad}</p>
            </div>
            <div class="content_ubi">
            <p class="ubicacion">${DatosPerros.data[i].extra.ubicacion}</p>
            </div>
            <p class="nombre_history">Historia de ${DatosPerros.data[i].nombre}</p>
            <p class="descrip_mascota">${DatosPerros.data[i].descripcion}</p> 
            `
    }
    }
   
}

// Ruta de las Imaganes de Personadlidaes 
var rutasImagenes = [
    {
        ruta: 'https://res.cloudinary.com/dbwgsrqgm/image/upload/v1702604480/Adopcion/gatos/jugueton_u6ylwk.png',
        nombres: 'Senas'
    },
    {
        ruta: 'https://res.cloudinary.com/dbwgsrqgm/image/upload/v1702604475/Adopcion/gatos/gatos_lgx2mu.png',
        nombres: 'Clara'
  
    },
    {
        ruta: 'https://res.cloudinary.com/dbwgsrqgm/image/upload/v1702604481/Adopcion/gatos/male_auckgw.png',
        nombres: 'sebas'
    } 
];



  // Función para crear contenedor e imagen
  function crearContenedorConImagen(rutaImagen) {
    var nuevoContenedor = document.createElement("div");
    nuevoContenedor.classList.add("contenedor_personalidad");
    document.body.appendChild(nuevoContenedor);

    var imagen = document.createElement("img");
    imagen.src = rutaImagen;
    imagen.classList.add("imagen_personalidad");
    nuevoContenedor.appendChild(imagen);

 // Crear contenedores e imágenes
  }
  for (let i = 0; i < 3; i++) {
    crearContenedorConImagen(rutasImagenes[i].ruta);
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
    //console.log(Datos.data[1].extra.ubicacion)
    for (let i = 0; i < Datos.data.length; i++) {
        if (recibe_gato == Datos.data[i].id){
            content_general.innerHTML = `
            <div class="content_img_class">
            <img class="img_class"  src="${Datos.data[i].url}" alt="${i}">
            </div>
            <div class="content_name_mascota">
            <h1 class="nombre_mascota">${Datos.data[i].nombre}</h1>
            </div>
            <div class="content_raza_mascota">
            <p class="raza_mascota">${Datos.data[i].raza}</p>
            <p class="raza_mascota">${Datos.data[i].edad}</p>
            </div>
           
            <div class="content_ubi">
            <p class="ubicacion">${Datos.data[i].extra.ubicacion}</p>
            </div>

            <p>Historia de ${Datos.data[i].nombre}</p>
            <p class="#">${Datos.data[i].descripcion}</p> 
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