import { listar_productos } from "./listar_productos";
import { listar_categorias } from "../categoria/listar_categorias";
import Swal from "sweetalert2";

export const crearproController = async () => {
    await new Promise(requestAnimationFrame);

    const form = document.querySelector("#form");
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");
    const categoria_id = document.querySelector("#categoria_id");

    const guardar = async (e) => {
        e.preventDefault();

        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            precio:precio.value,
            categoria_id: categoria_id.value
        }

        console.log(data);
        
        const request = await fetch('http://localhost:3000/api/productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        
        const response = await request.json();
        console.log(response);
        if (response.success) {
            form.reset();
            Swal.fire({
                title: 'Muy bien!',
                text: response.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            location.hash = "#productos";
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
            console.error(response);
        }
        listar_productos();
    }

    // Cargar las categorias
    const cargar_Categorias = async () => {
        const categorias = await listar_categorias();

        // console.log("Respuesta de listar_categorias:", categorias);

        const option = document.createElement("option");
        option.textContent = "Seleccione una categoria";
        categoria_id.append(option);

        categorias.forEach((categoria) => {
            const option = document.createElement("option");
            option.textContent = categoria.nombre;
            option.value = categoria.id;
            categoria_id.append(option);
        });
    }
    // Llamar a la funcion para cargar las categorias
    cargar_Categorias();

    if (form) {
        form.addEventListener("submit", guardar);
    } else {
        console.error("Formulario no encontrado");
    }
}