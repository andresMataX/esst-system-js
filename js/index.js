// Ruta para hacer el inicio de sesión
const url = 'http://127.0.0.1:5000/auth/login';

// Referencias HTML
const button = document.querySelector('#button');

const login = async (usuario) => {
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(usuario),
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
    const { value: user } = document.querySelector('#user');
    const { value: pass } = document.querySelector('#pass');
    const usuario = {
        user,
        pass
    }
    login(usuario);
}

button.addEventListener('click', () => {
    obtenerDatos();
});