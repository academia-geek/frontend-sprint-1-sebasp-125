const primer_logo = document.getElementById("primer_logo")
const primer_body = document.getElementById("primer_body")
const container_img_id = document.getElementById("container_img_id")

const div_adopcion_id = document.getElementById("div_adopcion_id")
const img_adopcion_id =  document.getElementById("img_adopcion_id")


//Nombrar Variables de la segunda interfaz
const p_strong_id = document.getElementById("p_strong_id")
const p_adopcion_id = document.getElementById("p_adopcion_id")
const img_adoptado_id = document.getElementById("img_adoptado_id")
const div_adoptado_id = document.getElementById("div_adoptado_id")
const siguiente_id_2 = document.getElementById("siguiente_id_2")

//Nombrar Variables de los Botones
const siguiente_id_1 = document.getElementById("siguiente_id_1")


    window.addEventListener('load' , () => {
        setTimeout(() => {
                primer_logo.classList.remove("img_original");
                primer_logo.classList.add("clase_modificada");
        
                setTimeout(() => {
                    primer_logo.style.display = "none"

                    //Me Elimina la img anterior para que no me
                    //moleste en la imagen nueva
                    container_img_id.style.display = "none"
                    //Me aparece la Imagen Nueva
                    div_adopcion_id.style.display = "flex"

                    //Aplico los Styles necesarios
                    img_adopcion_id.classList.add("img_adopcion_css")
                    img_adopcion_id.classList.add("img_adopcion_div")

                    p_strong_id.classList.add("p_strong_class")
                }, 2000);
                
                //AddEventListener
                siguiente_id_1.addEventListener("click" , function() {
                   setTimeout(() => {
                    //Elimino las cosas anteriores en el "Primera Interfaz"
                    img_adopcion_id.style.display = "none"
                    p_strong_id.style.display = "none"
                    p_adopcion_id.style.display = "none"
                    siguiente_id_1.style.display = "none"

                    //Agrego las nuevas imagenes de la "Segunda Interfaz"
                    div_adoptado_id.style.display = "flex"
                    img_adoptado_id.classList.add("img_adopcion_css")
                    img_adoptado_id.classList.add("img_adopcion_div")

                    
                    //Vuelvo a Agregarle el display flex al contenedor principal
                    //Agrego el Texto y la foto a su contenedor correspondiente
                   }, 1000);
                })
        } , 1000);
        })
        



        //---------------------Funcioness------------------
    
        //Activar el btn de "Siguiente" para que lo lleve a "Primera_Interfaz.html"
        function window_P_I () {
            window.location.href = "Adopcion_Mascotas.html"
        }