/**
 * Función para cargar los documentos de la base de datos
 * @module views/Productos/listar_categorias
 * @returns
 */
export const listar_categorias = async (id, data) => {
  try {
    const response = await fetch("http://localhost:3000/api/categorias");
    const data = await response.json();
    return data.data; 
  } catch (error) {
    console.error(error);
  }
};
