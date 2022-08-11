const curtains = document.getElementById("checkCurtains");
const door = document.getElementById("checkDoor");
const light = document.getElementById("checkLight");
const divInit = document.getElementById("0");
const divCurtains = document.getElementById("1");
const divDoor = document.getElementById("2");
const divLight = document.getElementById("3");

function addDataToChart1(dataApi, variable, name) {
  const data = {
    labels: ["0", "5", "10", "15", "20", "25"],
    datasets: [
      {
        label: `Performance of ${name}`,
        data: dataApi,
        backgroundColor: ["rgba(26, 115, 232, 0.18)"],
        borderColor: ["#1F3BB3"],
        borderWidth: 1,
        fill: true, // 3: no fill
        pointBorderWidth: 1,
        pointRadius: [4, 4, 4, 4, 4, 4],
        pointHoverRadius: [2, 2, 2, 2, 2, 2],
        pointBackgroundColor: [
          "#1F3BB3)",
          "#1F3BB3",
          "#1F3BB3",
          "#1F3BB3",
          "#1F3BB3)",
          "#1F3BB3",
          "#1F3BB3",
          "#1F3BB3",
          "#1F3BB3)",
          "#1F3BB3",
          "#1F3BB3",
          "#1F3BB3",
          "#1F3BB3)",
        ],
        pointBorderColor: [
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
          "#fff",
        ],
      },
    ],
  };

  const config = {
    type: "line",
    data,
    option: {
      scales: {
        x: {
          type: "realtime",
          realtime: {
            onRefresh: (chart) => {
              chart.data.datasets.forEach((dataset) => {
                dataset.data.push({
                  x: Date.now(),
                  y: Math.random() * 10,
                });
              });
            },
          },
        },
        y: {
          beginZero: true,
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById(`${variable}`), config);
  return myChart;
}

const data = [
  [12, 3, 4, 5, 6, 7],
  [9, 7, 5, 2, 0, 10],
  [8, 5, 10, 13, 7, 9],
];

const randomData = (position) => {
  let arrayData = [];
  for (let i = 0; i < 6; i++) {
    if (i <= 4) {
      arrayData.push(data[Number(position)][i + 1]);
    } else {
      arrayData.push(Math.floor(Math.random() * 10));
    }
  }
  data[Number(position)] = arrayData;
};

let curtainsX = addDataToChart1([], "myChart1", "curtains");
let doorX = addDataToChart1([], "myChart2", "door");
let lightX = addDataToChart1([], "myChart3", "light");
let initX = addDataToChart1([], "myChart0", "value");

curtains.onclick = function (e) {
  if (this.checked) {
    setInterval(() => {
      randomData(Number(0));
      curtainsX.destroy();
      curtainsX = addDataToChart1(data[0], "myChart1", "curtains");
    }, 3000);
    door.checked = false;
    light.checked = false;
    divCurtains.classList.remove("d-none");
    divDoor.classList.add("d-none");
    divLight.classList.add("d-none");
    divInit.classList.add("d-none");
  } else {
    divCurtains.classList.add("d-none");
    divDoor.classList.add("d-none");
    divLight.classList.add("d-none");
    divInit.classList.remove("d-none");
    initX.destroy();
    initX = addDataToChart1([], "myChart0", "value");
  }
};
door.onclick = function (e) {
  if (this.checked) {
    setInterval(() => {
      randomData(Number(1));
      doorX.destroy();
      doorX = addDataToChart1(data[1], "myChart2", "door");
    }, 3000);
    curtains.checked = false;
    light.checked = false;
    divDoor.classList.remove("d-none");
    divCurtains.classList.add("d-none");
    divInit.classList.add("d-none");
    divLight.classList.add("d-none");
  } else {
    divInit.classList.remove("d-none");
    divCurtains.classList.add("d-none");
    divDoor.classList.add("d-none");
    divLight.classList.add("d-none");
    initX.destroy();
    initX = addDataToChart1([], "myChart0", "value");
  }
};
light.onclick = function (e) {
  if (this.checked) {
    setInterval(() => {
      randomData(Number(2));
      lightX.destroy();
      lightX = addDataToChart1(data[2], "myChart3", "light");
    }, 3000);
    door.checked = false;
    curtains.checked = false;
    divLight.classList.remove("d-none");
    divDoor.classList.add("d-none");
    divInit.classList.add("d-none");
    divCurtains.classList.add("d-none");
  } else {
    divInit.classList.remove("d-none");
    divCurtains.classList.add("d-none");
    divDoor.classList.add("d-none");
    divLight.classList.add("d-none");
    initX.destroy();
    initX = addDataToChart1([], "myChart0", "value");
  }
};
