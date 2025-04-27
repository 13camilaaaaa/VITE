export const loadView = async (elemento, hash) => {
    const response = await fetch(`./src/views/${hash}/index.html`);
    const html = await response.text();
    elemento.innerHTML = html;
}