// URL de clientes
const urlClientes = 'http://127.0.0.1:5000/read/clientes';

const getClientes = async () => {
    const resp = await fetch(urlClientes);
    const { clientes } = await resp.json();
    console.log(clientes);
}

getClientes();