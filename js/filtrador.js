// Referenicas HTML
const divOpciones = document.querySelector('.opciones');
const temporalidad = document.querySelector('#temporalidad');
const temp = document.querySelector('#temp');

const reinicarDatalist = () => {
    opcionNueva = '';
    temporalidad.innerHTML = '';
    temp.value = '';
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

const agregaMeses = () => {
    reinicarDatalist();
    for (let i = 1; i < 13; i++) {
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
            temp.name = 'temporalidad_dia'
            agregaDias();
            break;
        case 'Mes':
            temp.name = 'temporalidad_mes'
            agregaMeses();
            break;
        case 'Año':
            temp.name = 'temporalidad_anio'
            reinicarDatalist();
            opcionNueva = `
            <option class="op" value="2022">
            `
            temporalidad.innerHTML = opcionNueva;
            break;
    }
});