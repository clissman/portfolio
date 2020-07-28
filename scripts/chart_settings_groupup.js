

var ctx_1 = document.getElementById('chart-1')
var ctx_2 = document.getElementById('chart-2')


Chart.defaults.global.defaultFontFamily = "DM Sans";
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#171717';
Chart.defaults.global.legend.labels.usePointStyle = true;


Chart.defaults.global.plugins.deferred.delay = '100'
Chart.defaults.global.plugins.deferred.yOffset = '65%'



var chart1 = new Chart(ctx_1, {
    type: 'horizontalBar',
    data: {
        labels: [
            "Desktop",
            "Laptop",
            "Tablet",
            "Cell Phone",
        ],
        datasets: [{
            data: [4, 11, 2, 16],
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

var chart2 = new Chart(ctx_2, {
    type: 'horizontalBar',
    data: {
        labels: [
            "Connecting with others",
            "Using filters",
            "Finding low cost events",
            "Reminders",
            "Sharing events with friends",
        ],
        datasets: [{
            data: [5, 14, 8, 3, 8],
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

