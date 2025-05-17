/**
 * Función para cargar los documentos de la base de datos
 * @module views/Productos/listar_categorias
 * @returns
 */
export const listar_productos = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/productos");
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }
};