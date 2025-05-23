const parrafos=document.querySelectorAll(".parrafo");
const botonResaltar=document.getElementById("resaltar");
const botonOcultar=document.getElementById("ocultar");



function resaltarParrafos(){
    for(let i=0;i<parrafos.length;i++){
        parrafos[i].classList.toggle("resaltado");
    }
}
function ocultarParrafos(){
    for(let i=0;i<parrafos.length;i++){
        parrafos[i].classList.toggle("oculto");
    }
}
botonResaltar.addEventListener("click",resaltarParrafos);   
botonOcultar.addEventListener("click",ocultarParrafos);


