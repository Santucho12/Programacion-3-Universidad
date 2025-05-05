const boton=document.getElementById("agregar");



function agregar(){
    const tarea=document.getElementById("tarea");
    const lista=document.getElementById("listaTareas");
    const nuevoElemento=document.createElement("li");
    nuevoElemento.textContent=tarea.value;
    const eliminar=document.createElement("button");
    eliminar.textContent="Eliminar";    
    
    nuevoElemento.appendChild(eliminar);
    lista.appendChild(nuevoElemento);
    
    eliminar.addEventListener("click",eliminarLi);
    function eliminarLi(){
        lista.removeChild(nuevoElemento);
    }
}









boton.addEventListener("click",agregar);
