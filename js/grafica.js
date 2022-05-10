// url para obtener la tabla de transacciones
const url = 'http://127.0.0.1:5000/read/transacciones';

let ingresos = gastos = 0;

const getIngresos = async () => {
    const resp = await fetch(url);
    const data = await resp.json()
    console.log(data);
}

getIngresos();

console.log(ingresos);
console.log(gastos);

const data = {
    labels: [
        'Costes',
        'Ingresos'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [gastos, ingresos],
        backgroundColor: [
            'rgb(192, 57, 43)',
            'rgb(30, 132, 73)',
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