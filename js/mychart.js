var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
            label: 'Income',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgb(255, 89, 150,0.6)"
        }, {
            label: 'Expend',
            labelSize: 50,
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: "rgb(75, 180, 254,0.6)",

        }]
    },
    options: {

        scales: {

            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize: 40,

                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 40,
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 40
                }
            }],
        }
    },
    // options: {
    //     scale: {
    //         pointLabel: {
    //             fontSize: 200,
    //         },
    //     }
    // }
});