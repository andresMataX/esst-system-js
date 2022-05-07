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
    if (estatus === 'ok') {
        window.location.href = "/crud/registro_cliente.html";
        alert(retro);
    } else {
        alert(error);
    }
}

// Función para obtener los valores de los campos del formulario
const obtenerDatos = () => {
    const { value: nombre } = document.querySelector('#nombre');
    const { value: apellido } = document.querySelector('#apellido');
    const value = document.querySelector('#corte');
    console.log(value.value);
    const cliente = {
        user: nombre,
        pass: apellido
    }
    // register(cliente);
}

aceptar.addEventListener('click', () => {
    obtenerDatos();
});