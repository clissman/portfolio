

var ctx_1 = document.getElementById('chart-1')
var ctx_2 = document.getElementById('chart-2')
var ctx_3 = document.getElementById('chart-3')
var ctx_4 = document.getElementById('chart-4')

Chart.defaults.global.defaultFontFamily = "DM Sans";
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#171717';
Chart.defaults.global.legend.labels.usePointStyle = true;


Chart.defaults.global.plugins.deferred.delay = '100'
Chart.defaults.global.plugins.deferred.yOffset = '65%'

var chart1 = new Chart(ctx_1, {
    type: 'doughnut',
    data: {
        labels: ["Yes", "No", "I haven't heard of it"],
        datasets: [{
            data: [88.9, 11.1, 0],
            backgroundColor: [
                '#6DDCFF',
                '#0FACDE',
                '#E477FF'
            ],
            borderWidth: 0,
            hoverBorderWidth: 0,
        }]
    },
    options: {
        legend: {
            display: true,
            onClick: null,
            position: 'top',
            labels: {
                boxWidth: 9,
                fontColor: '#505050',
                fontSize: 14,
            }
        }
    }
});

var chart2 = new Chart (ctx_2, {
    type: 'horizontalBar',
    data: {
        labels: [
            "Reading files",
            "Real-time collaboration",
            "Setting permissions",
            "Editing other's files",
            "Sharing files",
            "Versioning",
            ],
        datasets: [{
            data: [38, 39, 32, 32, 41, 1],
            backgroundColor: '#6DDCFF',
            barThickness: 'flex'
        }],
    },
    options: {
        scales: {
            yAxes: [{
                gridLines: { display: false }
            }]
        },
        legend: {
            display: false
        }
    },
});

var chart3 = new Chart(ctx_3, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            data: [0, 0, 0, 1, 1, 2, 5, 10, 4, 25],
            backgroundColor: '#6DDCFF',
            barThickness: 'flex'
        }]
    },
    options: {
        scales: {
            xAxes: [{ 
                gridLines: { display: false }
            }]
        },
        layout: {
            padding: {
                left: 25,
                right: 25,
                top: 10,
                bottom: 10
            }
        },
        legend: {
            display: false
        }
    }
});

var chart4 = new Chart(ctx_4, {
    type: 'doughnut',
    data: {
        labels: ["Dark Bottom Bar", "Light Bottom Bar"],
        datasets: [{
            data: [12, 3],
            backgroundColor: [
                '#0FACDE',
                '#6DDCFF',
            ],
            borderWidth: 0,
            hoverBorderWidth: 0,
        }]
    },
    options: {
        rotation: 0.2 * Math.PI,
        legend: {
            display: true,
            onClick: null,
            position: 'top',
            labels: {
                boxWidth: 10,
                fontColor: '#505050',
                fontSize: 15,
            }
        }
    }
});