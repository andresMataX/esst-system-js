(() => {
    'use strict'

    // Ruta para hacer el registro del cliente
    const urlClientes = 'http://127.0.0.1:5000/create/venta';
    const urlCortes = 'http://127.0.0.1:5000/read/cortes';

    // Referencias HTML
    const aceptar = document.querySelector('#aceptar');
    const datalistCorte = document.querySelector('#cortes');
    const inputCorte = document.querySelector('#corte');

    // Función para obtener los tipos de corte y agregarlos al datalist
    const getCortes = async () => {
        const resp = await fetch(urlCortes);
        const { cortes } = await resp.json();
        // Obtención de todos los nombres de los tipos de cortes
        let opcion = '';
        for (const { cut_name } of cortes) {
            opcion += `<option value="${cut_name}" class="opcion">`;
        }
        datalistCorte.innerHTML += opcion;
    }

    const getCorteID = async (cutName) => {
        const resp = await fetch(urlCortes);
        const { cortes } = await resp.json();
        for (const corte of cortes) {
            if (corte.cut_name === cutName) return corte.id
        }
    }

    getCortes();

    const register = async (cliente) => {
        const resp = await fetch(urlClientes, {
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
        const data = document.querySelectorAll('.opcion');
        const cliente = {
            name_cli: nombre,
            l_name_cli: apellido,
            id_cut_type: data
        }
        console.log(cliente);
        // register(cliente);
    }

    aceptar.addEventListener('click', () => {
        obtenerDatos();
    });

    inputCorte.addEventListener('change', (e) => {
        getCorteID(e.target.value).then(console.log)
    });
})();
