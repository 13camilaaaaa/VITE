import { loadView } from "../helpers/loadView.js";
import { productoController } from "../views/Productos/productosController.js";
import { categoriaController } from "../views/Categorias/categoriaController.js";
import { crearproController } from "../casos de uso/productos/crearproController.js";
import { crearcaController } from "../casos de uso/categoria/crearcaController.js";
import { editarcaController } from "../casos de uso/categoria/editarcaController.js";
import { editarproController } from "../casos de uso/productos/editarproController.js";

const routes = {
    "/": {
        "template": "Productos/index.html",
        controlador: productoController
    },
    productos: {
        "template": "Productos/index.html",
        controlador: productoController
    },
    crearproductos: {
        "template": "Productos/crear.html",
        controlador: crearproController
    },
    "editarproducto/:id": {
        "template": "Productos/editar.html",
        controlador: editarproController
    },
    categorias: {
        "template": "Categorias/index.html",
        controlador: categoriaController
    },
    crearcategorias: {
        "template": "Categorias/crear.html",
        controlador: crearcaController
    },
    "editarcategorias/:id": {
        "template": "Categorias/editar.html",
        controlador: editarcaController
    }
}

export const router = async (app) => {
    const hash = location.hash.slice(1);
    const [rutas, params] = matchRoute(hash)
    // Llmando la vista
    await loadView(app, rutas.template);
    // Ejecutar el controldor
    rutas.controlador(params)
}

const matchRoute = (hash) => {
    const arreglo = hash.split('/');
    for (const route in routes) {
        const b = route.split('/');
        if (b.length !== arreglo.length) continue

        const params = {}

        const matched = b.every((parte, i) => {
            if (parte.startsWith(":")) {
                const partName = parte.slice(1);
                const value = arreglo[i];
                params[partName] = value;
                return true
            }
            if (parte === arreglo[i]) {
                return true
            }
        });

        if (matched) {
            return [routes[route], params]
        }
    }
    return [null, null]
}