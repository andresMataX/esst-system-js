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

const convertirInputText = () => {
    reinicarDatalist();
    filtroFecha.name = 'fecha'
    filtroFecha.type = 'text';
}

// convertirInputText();

// Evento
divOpciones.addEventListener('click', (e) => {
    switch (e.target.outerText) {
        case 'Fecha':
            convertirInputText();
            break;
        case 'Día':
            filtroFecha.name = 'fecha_d'
            filtroFecha.type = '';
            agregaDias();
            break;
        case 'Mes':
            filtroFecha.name = 'fecha_m'
            filtroFecha.type = '';
            agregaMeses();
            break;
        case 'Año':
            filtroFecha.name = 'fecha_a'
            filtroFecha.type = '';
            reinicarDatalist();
            opcionNueva = `
            <option class="op" value="2022">
            `
            fecha.innerHTML = opcionNueva;
            break;
    }
});