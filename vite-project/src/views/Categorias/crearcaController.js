import Swal from "sweetalert2";
import { listar_categorias } from "./listar_categorias";

export const crearcaController = async () => {
    await new Promise(requestAnimationFrame);
    // const respuesta = await fetch("http://localhost:3000/api/categorias");

    const form = document.querySelector("#form");
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");

    // const datos = await respuesta.json();
    const guardar = async (e) => {
        e.preventDefault();

        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value
        }
        const request = await fetch('http://localhost:3000/api/categorias', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const response = await request.json();
        if (response.success) {
            form.reset();
            Swal.fire({
                title: 'Muy bien!',
                text: response.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            location.hash = "#categorias";
        }
        else {
            console.log(response);
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }

        listar_categorias();
    }
    if (form) {
        form.addEventListener("submit", guardar);
    } else {
        console.error("Formulario no encontrado");
    }
}