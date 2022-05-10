// Ruta para hacer el registro del cliente
const url = 'http://127.0.0.1:5000/create/venta';

// Referencias HTML
const aceptar = document.querySelector('#aceptar');

const register = async (cliente) => {
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const { error, estatus, retro } = await resp.json();
    alertify.set('notifier', 'position', 'top-center');
    if (estatus === 'ok') {
        alertify.success(retro);
        setTimeout(() => {
            window.location.href = "/crud/registro_cliente.html";
        }, 1500);
    } else {
        alertify.error(error);
    }
}

// Función para obtener los valores de los campos del formulario
const obtenerDatos = () => {
    const { value: nombre } = document.querySelector('#nombre');
    const { value: apellido } = document.querySelector('#apellido');
    const { index } = document.querySelector('.opcion');
    const cliente = {
        name_cli: nombre,
        l_name_cli: apellido,
        id_cut_type: index + 1
    }
    register(cliente);
}

aceptar.addEventListener('click', () => {
    obtenerDatos();
});