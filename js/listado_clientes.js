// URL de clientes
const urlClientes = 'http://127.0.0.1:5000/read/clientes';

// Referencias HTML
const tbody = document.querySelector('tbody');

const getClientes = async () => {
    const resp = await fetch(urlClientes);
    const { clientes } = await resp.json();
    for (const cliente of clientes) {
        tbody.innerHTML += createRow(cliente);
    }
}

const createRow = ({ id, name_cli, l_name_cli, cut_name }) => {
    const html = `<tr>
                        <th>${id}</th>
                        <td>${name_cli}</td>
                        <td>${l_name_cli}</td>
                        <td>${cut_name}</td>
                </tr>`
    return html;
}

getClientes();