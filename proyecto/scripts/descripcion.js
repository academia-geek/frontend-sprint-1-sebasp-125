console.log("......")
//imagen
const img_principal_id = document.getElementById("img_principal_id")

//nombre
const nombre_animal = document.getElementById("nombre_animal")


const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/gatos');
        // Accede a la propiedad 'data' y llama al método 'json'
        const JsonData = response.data;
        return JsonData;
       // console.log("mostrando json ", JsonData);
    } catch (error) {
        console.log(error);
    }
};


const obtenerDatos = async () => {
    try {
        const GatosData = await fetchData();
        if(GatosData && GatosData.length) {
            for (let i = 0; i < GatosData.length; i++) {
               // img_principal_id.src = GatosData[i].url
                nombre_animal.innerHTML = GatosData[i].nombre
            }
        } else {
            console.log("Eror")
        }
      
    }catch (Error) {
        console.log(Error);
    }
   
}

obtenerDatos();
fetchData();
