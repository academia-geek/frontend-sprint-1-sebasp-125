const primer_logo = document.getElementById("primer_logo")
//Body Logo 1
const body_logo1 = document.getElementById("body_logo1")

primer_logo.addEventListener('click' , function() {
    primer_logo.classList.remove("img_original");
    primer_logo.classList.add("clase_modificada");

    //Cambio de imagen al hacer click en la primera logo
})