// Referenicas HTML
const divOpciones = document.querySelector('.opciones');
const temporalidad = document.querySelector('#temporalidad');

let opcionNueva;
for (let i = 1; i < 32; i++) {
    opcionNueva += `
    <option class="op" value="${i}">
    `
}
temporalidad.innerHTML += opcionNueva;

// Evento
divOpciones.addEventListener('click', (e) => {
    switch (e.target.outerText) {
        case 'Día':
            opcionNueva = '';
            temporalidad.innerHTML = '';
            for (let i = 1; i < 32; i++) {
                opcionNueva += `
                <option class="op" value="${i}">
                `
            }
            temporalidad.innerHTML += opcionNueva;
            break;
        case 'Mes':

            break;
        case 'Año':

            break;
    }
});