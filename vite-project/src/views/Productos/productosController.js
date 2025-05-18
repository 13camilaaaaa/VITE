
import { listar_productos } from "../../casos de uso/productos/listar_productos";
import { listar_categorias } from "../../casos de uso/categoria/listar_categorias";
import { eliminarproController } from "../../casos de uso/productos/eliminarproController";

export const productoController = async () => {
    await new Promise(requestAnimationFrame);

    const form = document.querySelector("#form");
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");
    const categoria_id = document.querySelector("#categoria_id");

    const lista_productos = async () => {
        const response = await listar_productos();
        const data = await listar_categorias(); // Llamada a listar categorías
        
        const productos = response;
        const categorias = data;
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";

        // Iteramos sobre el array de categorias
        productos.forEach((productos) => {
            // Inserta una fila en la tabla
            const tr = tbody.insertRow();

            // Celda nombre
            const cellNombre = tr.insertCell(0);
            // Celda descripcion
            const cellDescripcion = tr.insertCell(1);
            // Celda precio
            const cellPrecio = tr.insertCell(2);
            // Celda categoria
            const cellCategoria = tr.insertCell(3);
            // Celda acciones
            const acciones = tr.insertCell(4);

            // Asignamos los valores de cada categoria
            cellNombre.textContent = productos.nombre;
            cellDescripcion.textContent = productos.descripcion;
            cellPrecio.textContent = productos.precio;
            cellCategoria.textContent = categorias.find((categoria) => categoria.id === productos.categoria_id)?.nombre || "Sin categoría";

           // Creamos los elementos de botones para editar y eliminar
            const div = document.createElement('div');
            const botonEditar = document.createElement('a');
            const botonEliminar = document.createElement('button');

            // Asignamos los textos a los botones
            botonEditar.textContent = "Editar";
            botonEliminar.textContent = "Eliminar";

            botonEditar.setAttribute("href", `#editarproducto/${productos.id}`);

            // Asignamos las clases a los botones y al div contenedor
            div.classList.add("botonera");
            botonEditar.classList.add("btn", "btn--small", "editar");
            botonEliminar.classList.add("btn", "btn--small", "btn--danger", "eliminar");
            
            // Asignamos el id a los tr para poder eliminarlos y identificarlos
            tr.setAttribute("id", `user_${productos.id}`);

            botonEliminar.dataset.id = productos.id;            
            botonEliminar.addEventListener("click", async() => {
                await eliminarproController({ id: productos.id });
            })

            div.append(botonEditar, botonEliminar);
            acciones.append(div);
        });
    }
    // Llamamos a la funcion lista_categorias
    lista_productos();
    
}