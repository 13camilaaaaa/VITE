import Swal from "sweetalert2";

export const eliminarController = async (a) => {
    try {
        const request = await fetch(`http://localhost:3000/api/categorias/${a.id}`, {
            method: 'DELETE',
        });
        const result = await request.json();
        if (result.success) {
            Swal.fire({
                title: 'Muy bien!',
                text: result.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            location.hash = "#categorias";
        } else {
            Swal.fire({
                title: 'Error!',
                text: result.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    } catch (error) {
        console.error(error);
        Swal.fire({
            title: 'error!',
            text: 'hubo un problema al eliminar la categoria',
            icon: 'error',
            confirmButtonText: 'ok'
        });
    }
}
