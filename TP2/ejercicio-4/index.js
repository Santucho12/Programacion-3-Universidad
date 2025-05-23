const boton =document.getElementById("agregarTarea");
const listaDeTareas=document.getElementById("listaDeTareas");
const tarea=document.getElementById("tarea");

boton.addEventListener("click",agregarTarea);
function agregarTarea(event){
    event.preventDefault();
    const nuevoLi=document.createElement("li");
    nuevoLi.textContent=tarea.value;
    listaDeTareas.appendChild(nuevoLi);
    tarea.value="";


    
    nuevoLi.addEventListener("click",marcarTarea);
    function marcarTarea(){
        nuevoLi.classList.toggle("completado"); 
    }
}
