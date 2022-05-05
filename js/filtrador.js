// Referenicas HTML
const divOpciones = document.querySelector('.opciones');
const fecha = document.querySelector('#fecha');
const filtroFecha = document.querySelector('#filtro_fecha');

const reinicarDatalist = () => {
    opcionNueva = '';
    fecha.innerHTML = '';
    filtroFecha.value = '';
}

const agregaDias = () => {
    reinicarDatalist();
    for (let i = 1; i < 32; i++) {
        opcionNueva += `
                <option class="op" value="${i}">
                `
    }
    fecha.innerHTML += opcionNueva;
}

const agregaMeses = () => {
    reinicarDatalist();
    for (let i = 1; i < 13; i++) {
        opcionNueva += `
                <option class="op" value="${i}">
                `
    }
    fecha.innerHTML += opcionNueva;
}

agregaDias();

// Evento
divOpciones.addEventListener('click', (e) => {
    switch (e.target.outerText) {
        case 'Fecha':

            break;
        case 'Día':
            filtroFecha.name = 'temporalidad_dia'
            agregaDias();
            break;
        case 'Mes':
            filtroFecha.name = 'temporalidad_mes'
            agregaMeses();
            break;
        case 'Año':
            filtroFecha.name = 'temporalidad_anio'
            reinicarDatalist();
            opcionNueva = `
            <option class="op" value="2022">
            `
            fecha.innerHTML = opcionNueva;
            break;
    }
});