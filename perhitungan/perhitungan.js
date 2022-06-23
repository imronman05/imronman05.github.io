let navigasi = document.querySelector('.navigation');
const menuToggle = document.querySelector('.menu');
    menuToggle.addEventListener('click',()=>{
        menuToggle.classList.toggle('toggle');
        navigasi.classList.toggle('geser');
    })

const nav = document.querySelector('.perhitungan');
    nav.addEventListener('click', (e)=>{
        e.preventDefault();
    })


let data1 = [55, 25,10,60,49,80,50,100];
let data2 = [45, 75,90,40,51,20,50,100];
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['LaporLah', 'StandOnIndo', 'MLM','Compos','Sucim','Temi','Pas'],
        datasets: [{
            label: 'Nurhadi & Aldo',
            data: data1,
            backgroundColor: ['rgba(234, 40, 40, 0.5)'],
            borderColor: ['rgba(234, 40, 40, 1)'],
            borderWidth: 1,
        },{
        	label: 'Dustin & Rangga',
            data: data2,
            backgroundColor: ['rgba(5, 68, 103, 0.5)'],
            borderColor: ['rgba(5, 68, 103, 1)'],
            borderWidth: 1,
        },]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Perhitungan Cepat',
                font :{
                    family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    size: 25
                }
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title : function(item){
                        let judul = item[0].dataset.label
                        return judul;
                    },
                    label: function(itemTooltip){
                        let value = itemTooltip.formattedValue
                        return value + '%';
                    },
                },
                displayColors: false,
                bodyAlign: 'center',
            }
        }
    }
});
