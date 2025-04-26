import './main.css';

const app = document.querySelector('#app');

const header = document.createElement('header');
header.classList.add('container', 'header');

const div = document.createElement('div');
div.classList.add('menu');

const categorias = document.createElement('a');
categorias.textContent = 'Categorias';
categorias.classList.add('menu__link');
categorias.setAttribute("href",'#categorias');

const productos = document.createElement('a');
productos.textContent = 'Productos';
productos.classList.add('menu__link');
productos.setAttribute("href",'#productos');



app.append(header);
header.append(div);
div.append(categorias, productos);

const loadView = () => {
  console.log(location);
const hash = location.slice(1);
console.log(hash);

}

window.addEventListener('hashchange', loadView);



