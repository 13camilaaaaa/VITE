import Swal from "sweetalert2";
import { listar_categorias } from "../categoria/listar_categorias";
export const editarproController = async (a) => {
    const request = await fetch(`http://localhost:3000/api/productos/${a.id}`);
    const { data } = await request.json();

    const categorias = await listar_categorias();

    const form = document.querySelector("#form");
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");
    const precio = document.querySelector("#precio");
    const categoria_id = document.querySelector("#categoria_id");
    

    nombre.value = data.nombre;
    descripcion.value = data.descripcion;
    precio.value = data.precio;
    categoria_id.value = data.categoria_id; 

    categorias.forEach((categoria) => {
            const option = document.createElement("option");
            option.textContent = categoria.nombre;
            option.value = categoria.id;
            if (categoria.id === data.categoria_id) {
                option.selected = true;
            }
            categoria_id.append(option);
        });
    
    const guardaredicion = async (e) => {
        e.preventDefault();

        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            precio: precio.value,
            categoria_id: categoria_id.value
        }
        try {
            const response = await fetch(`http://localhost:3000/api/productos/${a.id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const result = await response.json();
            if (result.success) {
                form.reset();
                Swal.fire({
                    title: 'Muy bien!',
                    text: response.message,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                location.hash = "#categorias";
            } else {
                console.log(response);
                Swal.fire({
                    title: 'Error!',
                    text: response.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }
        } catch (error) {
            console.error("error al actualizar la categoria:", error);
        }
    }
    if (form) {
        form.addEventListener("submit", guardaredicion);
    } else {
        console.error("formulario no encontrado");
    }
}