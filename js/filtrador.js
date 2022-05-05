// Referenicas HTML
const divOpciones = document.querySelector('.opciones');
const temporalidad = document.querySelector('#temporalidad');

// Evento
divOpciones.addEventListener('click', (e) => {
    console.log(e.target.outerText);
    console.log(temporalidad);
});