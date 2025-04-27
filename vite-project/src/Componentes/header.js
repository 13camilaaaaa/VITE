const app = document.querySelector('#app');

const header = document.querySelector('#header');
header.classList.add('container', 'header');

const div = document.createElement('div');
div.classList.add('menu');

const categorias = document.createElement('a');
categorias.textContent = 'Categorias';
categorias.classList.add('menu__link');
categorias.setAttribute("href", '#categorias');

const productos = document.createElement('a');
productos.textContent = 'Productos';
productos.classList.add('menu__link');
productos.setAttribute("href", '#productos');

header.append(div);
div.append(categorias, productos);

