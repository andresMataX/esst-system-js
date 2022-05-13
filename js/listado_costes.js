(() => {
    // URL de clientes
    const urlCostes = 'https://morning-scrubland-07944.herokuapp.com/read/costes';

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
            name_cost: ''
        }
        filtro.name_cost = inputProducto.value;
        if (filtro.name_cost === '') {
            alertify.set('notifier', 'position', 'top-center');
            alertify.error('Debes llenar el campo con información.')
        } else {
            filterCosteName(filtro);
        }
    });
})();