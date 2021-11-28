
//counte up
$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});

//line chart
let dateArr = ['jun', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
let orderCountArr = [7, 4, 5, 8, 9, 12, 14, 4, 10, 7,3,8];
let viewerCountArr = [13, 3, 4, 10, 9, 12, 4, 8, 10, 7, 9, 12];

const lineChartdata = {
    labels: dateArr,
    datasets: [{
      label: 'Order Count',
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderColor: 'rgb(255, 99, 132)',
      data: orderCountArr,
      tension: 0.43,
      pointStyle: 'circle',
      fill: true,
    },
    {
      label: 'Viewer Count',
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderColor: 'cyan',
      data: viewerCountArr,
      tension: 0.43,
      pointStyle: 'circle',
      fill: true,
    }]
  };
const configLineChart = {
    type: 'line',
    data: lineChartdata,
    options: {
      
    }
  };

let lineChart = new Chart(
    document.getElementById('lineChart'),
    configLineChart
    );


// pie chart 
let orderFromPlace = [5, 15, 4, 9, 7];
let places = ['YGN', 'MDY', 'NPY', 'SHAN', 'MGW'];


const pieChardata = {
  labels: places,
  datasets: [{
    label: 'Orde From Places',
    data: orderFromPlace,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
  ],
  borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ],
    hoverOffset: 4
  }]
};

const pieChartconfig = {
  type: 'pie',
  data: pieChardata,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend:{
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded'
        }
      }
    }
  }
};

let pieChart = new Chart(
    document.getElementById('pieChart'),
    pieChartconfig
);
