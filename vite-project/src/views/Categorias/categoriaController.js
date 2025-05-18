import { listar_categorias } from "../../casos de uso/categoria/listar_categorias";
import { eliminarController } from "../../casos de uso/categoria/eliminarcaController.js";

export const categoriaController = async () => {
    await new Promise(requestAnimationFrame);
    // const respuesta = await fetch("http://localhost:3000/api/categorias");

    const form = document.querySelector("#form");
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");

    const lista_categorias = async () => {
        const response = await listar_categorias(); // Llamada a listar categorías

        const categorias = response;
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";

        // Iteramos sobre el array de categorias
        categorias.forEach((categoria) => {
            // Inserta una fila en la tabla
            const tr = tbody.insertRow();

            // Celda nombre
            const cellNombre = tr.insertCell(0);
            // Celda descripcion
            const cellDescripcion = tr.insertCell(1);
            // Celda acciones
            const acciones = tr.insertCell(2);

            // Asignamos los valores de cada categoria
            cellNombre.textContent = categoria.nombre;
            cellDescripcion.textContent = categoria.descripcion;

            // Creamos los elementos de botones para editar y eliminar
            const div = document.createElement('div');
            const botonEditar = document.createElement('a');
            const botonEliminar = document.createElement('button');

            // Asignamos los textos a los botones
            botonEditar.textContent = "Editar";
            botonEliminar.textContent = "Eliminar";

            botonEditar.setAttribute("href", `#editarcategorias/${categoria.id}`);

            // Asignamos las clases a los botones y al div contenedor
            div.classList.add("botonera");
            botonEditar.classList.add("btn", "btn--small", "editar");
            botonEliminar.classList.add("btn", "btn--small", "btn--danger", "eliminar");

            // nuevo: evento de eliminacion
            botonEliminar.dataset.id = categoria.id;
            botonEliminar.addEventListener("click", async () => {
                await eliminarController({ id: categoria.id });
                await lista_categorias(); // refresca la lista despues de eliminar
            });

            div.append(botonEditar, botonEliminar);
            acciones.append(div);
        });
    }

    // Llamamos a la funcion lista_categorias
    lista_categorias();
}