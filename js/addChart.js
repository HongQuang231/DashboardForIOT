const curtains = document.getElementById('checkCurtains');
const door = document.getElementById('checkDoor');
const light = document.getElementById('checkLight');
const divCurtains = document.getElementById('1');
const divDoor = document.getElementById('2');
const divLight = document.getElementById('3');



function addDataToChart1(dataApi, variable, name) {
    const data = {
        labels: ['0', '5', '10', '15', '20', '25'],
        datasets: [{
            label: `Performance of ${name}`,
            data: dataApi,
            backgroundColor: [
                'rgba(26, 115, 232, 0.18)',
            ],
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 1,
            fill: true, // 3: no fill
            pointBorderWidth: 1,
            pointRadius: [4, 4, 4, 4, 4, 4],
            pointHoverRadius: [2, 2, 2, 2, 2, 2],
            pointBackgroundColor: ['#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3', '#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3', '#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3', '#1F3BB3)'],
            pointBorderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff',],
        }]
    };

    const config = {
        type: 'line',
        data,
        option: {
            scales: {
                x: {
                    type: 'realtime',
                    realtime: {
                        onRefresh: chart => {
                            chart.data.datasets.forEach(dataset => {
                                dataset.data.push({
                                    x: Date.now(),
                                    y: Math.random() * 10
                                });
                            })
                        }
                    }
                },
                y: {
                    beginZero: true
                }
            }
        }
    };

    const myChart = new Chart(
        document.getElementById(`${variable}`),
        config
    )
}

addDataToChart1([], 'myChart1', 'value');

const data = [
    [12, 3, 4, 5, 6, 7],
    [9, 7, 5, 2, 0, 10],
    [8, 5, 10, 13, 7, 9]
]
curtains.onclick = function (e) {
    if (this.checked) {
        door.checked = false;
        light.checked = false;
        divCurtains.classList.remove('d-none');
        divDoor.classList.add('d-none');
        divLight.classList.add('d-none');
        addDataToChart1(data[0], 'myChart1', 'curtains');
    }
};
door.onclick = function (e) {
    if (this.checked) {
        curtains.checked = false;
        light.checked = false;
        divDoor.classList.remove('d-none');
        divCurtains.classList.add('d-none');
        divLight.classList.add('d-none');
        addDataToChart1(data[1], 'myChart2', 'door')
    }
};
light.onclick = function (e) {
    if (this.checked) {
        door.checked = false;
        curtains.checked = false;
        divLight.classList.remove('d-none');
        divDoor.classList.add('d-none');
        divCurtains.classList.add('d-none');
        addDataToChart1(data[2], 'myChart3', 'light')
    }
};