const content_gatos_id = document.getElementById("content_gatos_id")
const content_cuadros_img_id_gatos = document.getElementById("content_cuadros_img_id_gatos")
const content_perros_id = document.getElementById("content_perros_id")
const content_cuadros_img_id = document.getElementById("content_cuadros_img_id")
const content_cuadros_img_id_perros = document.getElementById("content_cuadros_img_id_perros")


//---------------Cambio de Imaganes depende de la Eleccion del Usuario--------------
content_cuadros_img_id_gatos.style.display = "none"
content_gatos_id.addEventListener("click" , function(){
    //Desaparecemos los cuadros anteriores "la de los Perros"
    content_cuadros_img_id_perros.style.display = "none"

    //Aparecemos los cuadros de los Gatos.
    content_cuadros_img_id_gatos.style.display = "flex"
})

content_perros_id.addEventListener("click" , function(){
    //Desaparecemos los cuadros anteriores "la de los gatos"
    content_cuadros_img_id_gatos.style.display = "none"

    //Aparecemos los cuadros anteriores "la de los Perros"
    content_cuadros_img_id_perros.style.display = "flex"
})
//----------------------------------------------------------

//-----------Descripcion de la Mascota dependiendo de la Eleccion-----------
content_cuadros_img_id.addEventListener("click", function(){
    window.location.href = "descripcion.html"
})
