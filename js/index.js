// Ruta para hacer el inicio de sesión
const url = 'http://127.0.0.1:5000/auth/login';

// Referencias HTML
const form = document.querySelector('form');

const login = async (usuario) => {
    console.log(usuario);
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await resp.json();
    console.log(data);
    return data;
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