export const loadView = async (elemento, hash) => {
    const response = await fetch(`./src/views/${hash}`);
    const html = await response.text();
    elemento.innerHTML = html;
}