// Referenicas HTML
const divOpciones = document.querySelector('.opciones');
const temporalidad = document.querySelector('#temporalidad');

const reinicarDatalist = () => {
    opcionNueva = '';
    temporalidad.innerHTML = '';
}

const agregaDias = () => {
    reinicarDatalist();
    for (let i = 1; i < 32; i++) {
        opcionNueva += `
                <option class="op" value="${i}">
                `
    }
    temporalidad.innerHTML += opcionNueva;
}

agregaDias();

// Evento
divOpciones.addEventListener('click', (e) => {
    switch (e.target.outerText) {
        case 'Día':
            agregaDias();
            break;
        case 'Mes':

            break;
        case 'Año':

            break;
    }
});