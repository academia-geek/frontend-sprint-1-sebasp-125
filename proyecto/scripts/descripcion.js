console.log("...........")
const img_principal = document.getElementById("img_principal")
const content_general = document.getElementById("content_general")


//SessionStorage
const recibe = localStorage.getItem('Envia_id_perro')
console.log(recibe)


const FetchData = async () => {
    try {
        const response = await axios.get('https://adopcion-alpha.vercel.app/perros')
        return response;
    } catch (Error) {
        console.log(Error)
    }
}

async function Descripcion() {
    const Datos = await FetchData();
    content_general.innerHTML = '';
    //console.log(Datos.data)
    for (let i = 0; i < Datos.data.length; i++) {
        if (recibe == Datos.data[i].id) {
            console.log(true)
            content_general.innerHTML += `
            <img src="${Datos.data[i].url}" alt="${i}">
            <h2>${Datos.data[i].nombre}</h2>
            <p class="parrafo">Raza: ${Datos.data[i].raza}</p>
            <p class="parrafo">Edad: ${Datos.data[i].edad}</p>
            <p class="parrafo">Descripcion: ${Datos.data[i].descripcion}</p>
            <p class="parrafo">Personalidad: ${Datos.data[i].personalidad}</p>
            `
    }
}
}
Descripcion()   