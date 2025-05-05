const titulo=document.getElementById("tituloPrincipal");
titulo.textContent="Titulo modificado";

const parrafos=document.getElementsByClassName("parrafo");

parrafos[0].style.color="red";
parrafos[1].style.color="blue";

const elementosli=document.querySelectorAll("li");
elementosli[0].textContent+="Elemento 1 modificado";
elementosli[1].textContent+="Elemento 2 modificado";
elementosli[2].textContent+="Elemento 3 modificado";