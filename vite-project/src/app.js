import './main.css';
import './Componentes/header.js';
import { loadView } from './helpers/loadView.js';
import { router } from './router/router.js';



window.addEventListener('hashchange', () => {
  router(app);
});



