const data = {
    labels: [
        'Costes',
        'Ingresos'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [50, 1000],
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