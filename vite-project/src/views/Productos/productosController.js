
import { listar_productos } from "./listar_productos";
import { listar_categorias } from "../Categorias/listar_categorias";


export const productoController = async () => {
    await new Promise(requestAnimationFrame);

    const form = document.querySelector("#form");
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");
    const categoria_id = document.querySelector("#categoria_id");


    const lista_productos = async () => {
        const response = await listar_productos(); // Llamada a listar categorías

        const productos = response;
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
            cellCategoria.textContent = productos.categoria_id;

           // Creamos los elementos de botones para editar y eliminar
            const div = document.createElement('div');
            const botonEditar = document.createElement('button');
            const botonEliminar = document.createElement('button');

            // Asignamos los textos a los botones
            botonEditar.textContent = "Editar";
            botonEliminar.textContent = "Eliminar";

            // Asignamos las clases a los botones y al div contenedor
            div.classList.add("botonera");
            botonEditar.classList.add("btn", "btn--small", "editar");
            botonEliminar.classList.add("btn", "btn--small", "btn--danger", "eliminar");

            div.append(botonEditar, botonEliminar);
            acciones.append(div);
        });
    }
    // Llamamos a la funcion lista_categorias
    lista_productos();
    
}