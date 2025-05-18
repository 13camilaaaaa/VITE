import Swal from "sweetalert2";

export const editarcaController = async (a) => {
    const request = await fetch(`http://localhost:3000/api/categorias/${a.id}`);
    const {data} = await request.json();

    const form = document.querySelector("#form");
    const nombre = document.querySelector("#nombre");
    const descripcion = document.querySelector("#descripcion");

        nombre.value = data.nombre;
        descripcion.value = data.descripcion;

    const guardaredicion = async (e) => {
        e.preventDefault();
        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value
        }
        try {
            const response = await fetch(`http://localhost:3000/api/categorias/${a.id}`, {
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
            } else{
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
