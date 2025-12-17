// Seleccionamos los elementos del DOOM
const formularioTareas = document.getElementById('formulario-tareas');
const inputTarea = formularioTareas.querySelector('input');
const listaTareas = document.getElementById('lista-tareas');
const formularioBorrar = document.getElementById('borrar-tareas');

// --- FUNCIONALIDAD: AGREGAR TAREA ---
formularioTareas.addEventListener('submit', (e) => {
    e.preventDefault(); // Esto evita que la pagina se recargue

    const textoTarea = inputTarea.value.trim();

    if (textoTarea !== "") {
        // Crear el nuevo elemento <li>
        const nuevaLi = document.createElement('li');
        nuevaLi.textContent = textoTarea;

        // Añadirlo a la lista
        listaTareas.appendChild(nuevaLi);

        // Limpiar el input y devolver el foco
        inputTarea.value = "";
        inputTarea.focus();
    }
});

//Con esto se borra la ultima tarea de la lista
formularioBorrar.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita porsiacaso el refresco de la pagina

    const tareas = listaTareas.querySelectorAll('li');
    
    if (tareas.length > 0) {
        // Elimina el ultimo elemento de la lista
        listaTareas.removeChild(tareas[tareas.length - 1]);
    } else {
        alert("No hay más tareas para borrar.");
    }
});