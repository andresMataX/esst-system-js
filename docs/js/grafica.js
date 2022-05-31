(() => {
    // url para obtener la tabla de transacciones
    const url = 'https://esst-system-flask.herokuapp.com/read/transacciones';

    let ingresos = gastos = 0;

    const getIngresos = async () => {
        const resp = await fetch(url);
        const { transacciones } = await resp.json()
        for (const transaccion of transacciones) {
            console.log(transaccion.tran_type);
            if (transaccion.tran_type == 0) {
                ingresos += transaccion.tran_price;
            } else {
                gastos += transaccion.tran_price;
            }
        }
        console.log('Ingresos', ingresos);
        console.log('Gastos', gastos);
        renderGrafica();
    }

    getIngresos();

    const renderGrafica = () => {
        const data = {
            labels: [
                'Costes',
                'Ingresos'
            ],
            datasets: [{
                label: 'Balance del local',
                data: [gastos, ingresos],
                backgroundColor: [
                    'rgb(192, 57, 43)',
                    'rgb(30, 132, 73)'
                ],
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'pie',
            data: data,
            options: {
                layout: {
                    autoPadding: false
                }
            }
        };

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    }
})();