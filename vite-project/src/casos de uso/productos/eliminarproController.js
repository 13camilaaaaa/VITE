import Swal from "sweetalert2";

export const eliminarproController = async (a) => {
    try {
        const request = await fetch(`http://localhost:3000/api/productos/${a.id}`, {
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
            location.hash = "#productos";
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

    }
}