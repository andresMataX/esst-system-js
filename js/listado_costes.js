// URL de clientes
const urlCostes = 'http://127.0.0.1:5000/read/costes';

// Referencias HTML
const tbody = document.querySelector('tbody');
const inputProducto = document.querySelector('#producto');
const button = document.querySelector('.button');

const getCostes = async () => {
    const resp = await fetch(urlCostes);
    const { costes } = await resp.json();
    for (const coste of costes) {
        tbody.innerHTML += createRow(coste);
    }
}

const createRow = ({ id, name_cost, prod_price, prod_name }) => {
    const html = `<tr>
                        <th>${id}</th>
                        <td>${name_cost}</td>
                        <td>${prod_name}</td>
                        <td>${prod_price}</td>
                </tr>`
    return html;
}

getCostes();

const filterCosteName = async (date) => {
    const resp = await fetch(urlCostes, {
        method: 'POST',
        body: JSON.stringify(date),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    tbody.innerHTML = '';
    const { filtro: costes } = await resp.json();
    alertify.set('notifier', 'position', 'top-center');
    if (costes.length === 0) {
        alertify.warning('No se han encontrado registros con ese filtro.');
    }
    for (const coste of costes) {
        tbody.innerHTML += createRow(coste);
    }
}

button.addEventListener('click', () => {
    const filtro = {
        date: '',
        day: '',
        month: '',
        year: ''
    }
    switch (inputProducto.name) {
        case 'fecha':
            filtro.date = inputProducto.value;
            break;
        case 'fecha_d':
            filtro.day = inputProducto.value;
            break;
        case 'fecha_m':
            filtro.month = (inputProducto.value) < 10 ? '0' + inputProducto.value : inputProducto.value;
            break;
        case 'fecha_a':
            filtro.year = inputProducto.value;
            break;
    }
    if (filtro.day === '' && filtro.month === '' && filtro.year === '' && filtro.date === '') {
        alertify.set('notifier', 'position', 'top-center');
        alertify.error('Debes llenar el campo con información.')
    } else {
        filterCosteName(filtro);
    }
});