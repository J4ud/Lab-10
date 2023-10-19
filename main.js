const fila = document.querySelector('.contenedor-carrusel');
const pelicula = document.querySelector('.peliculas');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

const fila2 = document.querySelector('.contenedor-carrusel2');
const pelicula2 = document.querySelector('.peliculas2');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ---- ---- Event Listener derecha ---- ----- //
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});
// ? ---- ---- Event Listener izquierda ---- ----- //
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

// ? ---- ---- Event Listener derecha2 ---- ----- //
flechaDerecha2.addEventListener('click', () => {
    fila2.scrollLeft += fila2.offsetWidth;
});
// ? ---- ---- Event Listener izquierda2 ---- ----- //
flechaIzquierda2.addEventListener('click', () => {
    fila2.scrollLeft -= fila2.offsetWidth;
});