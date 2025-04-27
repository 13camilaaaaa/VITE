import { loadView } from "../helpers/loadView";
import { productoController } from "../views/Productos/productoController.js";
import { categoriaController } from "../views/Categorias/categoriaController.js";

const routes = {
    productos: {
        "template": "productos/index.html",
        controlador: productoController,
    },
    categorias: {
        "template": "categorias/index.html",
        controlador: categoriaController,
    }
}

export const router = (app) => {
    const hash = location.hash.slice(1);
    const {template, controlador} = matchRoute(hash);
    // llamando la vista
    loadView(app, hash);
    // llamando el controlador
    
}

const matchRoute = (hash) => {
    for (const route in routes) {
        if (route === hash){
            return route[route];
        }
    }
}
