(() => {
    'use strict'

    // Ruta para hacer el registro del coste
    const urlCostes = 'https://morning-scrubland-07944.herokuapp.com/create/coste';
    const urlProductos = 'https://morning-scrubland-07944.herokuapp.com/read/productos';

    // ID del Nombre del tipo de corte seleccionado
    let idProduct = 0;

    // Referencias HTML
    const aceptar = document.querySelector('#aceptar');
    const datalistProductos = document.querySelector('#productos');
    const inputCoste = document.querySelector('#coste');

    // Función para obtener los tipos de corte y agregarlos al datalist
    const getProductos = async () => {
        const resp = await fetch(urlProductos);
        const { producto } = await resp.json();
        // Obtención de todos los nombres de los tipos de cortes
        let opcion = '';
        for (const { prod_name } of producto) {
            opcion += `<option value="${prod_name}" class="opcion">`;
        }
        datalistProductos.innerHTML += opcion;
    }

    const getProductoID = async (productName) => {
        const resp = await fetch(urlProductos);
        const { producto } = await resp.json();
        for (const product of producto) {
            if (product.prod_name === productName) return product.id
        }
    }

    getProductos();

    const register = async (coste) => {
        const resp = await fetch(urlCostes, {
            method: 'POST',
            body: JSON.stringify(coste),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const { error, estatus, retro } = await resp.json();
        alertify.set('notifier', 'position', 'top-center');
        if (estatus === 'ok') {
            alertify.success(retro);
            setTimeout(() => {
                window.location.href = "../crud/registro_coste.html";
            }, 1500);
        } else {
            alertify.error(error);
        }
    }

    // Función para obtener los valores de los campos del formulario
    const obtenerDatos = () => {
        const { value: nombre } = document.querySelector('#nombre');
        const producto = {
            name_cost: nombre,
            id_pro_type: idProduct
        }
        register(producto);
    }

    aceptar.addEventListener('click', () => {
        obtenerDatos();
    });

    inputCoste.addEventListener('change', (e) => {
        getProductoID(e.target.value).then((id) => {
            idProduct = id;
        });
    });
})();
