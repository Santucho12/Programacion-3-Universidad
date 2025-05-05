const imgvista = document.querySelector("img");
const galeria =document.querySelector("#galeria");


galeria.addEventListener("click", mostrarImagen );
function mostrarImagen(evento){
        imgvista.src = evento.target.src ;
    }
    
