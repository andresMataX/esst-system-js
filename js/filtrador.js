// Referenicas HTML
const divOpciones = document.querySelector('.opciones');
const temporalidad = document.querySelector('#temporalidad');

let i = 0;

// Evento
divOpciones.addEventListener('click', (e) => {
    console.log(e.target.outerText);
    let opcionNueva = `
        <option class="op" value="${i}">
    `
    i++;
    temporalidad.innerHTML += opcionNueva;
});