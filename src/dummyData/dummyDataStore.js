import Highcharts from 'highcharts';

export const navigationItems = [
    {label:'DashBoard',link: '/dashboard',icon:'bar-chart'},
    {label:'Reporting',link: '/reporting',icon:'table'},
    {label:'Performance',link: '/performance',icon:'tachometer'},
    {label:'Links',link: '/links',icon:'anchor'},
]

export const barLineChartConfigBP = {
    title: {
        text: 'Average Blood Preasure'
    },
    xAxis: {
        categories: ['John', 'Mary', 'Joe', 'Dave']
    },
    series: [{
        type: 'column',
        name: '6 days',
        data: [120,160.0,170,115]
    }, {
        type: 'column',
        name: '6 weeks',
        data: [147,130.0,150,165]
    }, {
        type: 'column',
        name: '6 Months',
        data: [180,90.0,120,125]
    }, {
        type: 'spline',
        name: 'Average',
        data: [150,130.0,140,125],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }]
}

export const lineChartConfigHeartrate= {
    title: {
        text: 'Heart Rate of Patients'
    },
    yAxis: {
        title: {
            text: 'Pulse rate'
        }
    },
    xAxis:{
        categories: ['John', 'Mary', 'Joe', 'Dave']
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },
    series: [{
        name: '6 days',
        data: [70,65,80,65]
    }, {
        name: '6 weeks',
        data:  [72,60,86,70]
    }, {
        name: '6 Months',
        data:  [79,65,69,76]
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
}

export const urineComponents =  {
    chart: {
     type: 'pie',
     renderTo: 'container'
   },
   title: {
     verticalAlign: 'middle',
     horizontalAlign: 'middle',
     floating: true,
     text: 'Urine Culture'
   },
   plotOptions: {
     pie: {
       innerSize: '90%'
     }
   },

   series: [{
     data: [
       ['Albumin', 41.2],
       ['Protien', 29.6],
       ['Lorem', 17],
       ['Ipsum', 4],
       ['Bactaria', 7]
     ]
   }]
}

export const bloodComponents =  {
    chart: {
     type: 'pie',
     renderTo: 'container'
   },
   title: {
     verticalAlign: 'middle',
     horizontalAlign: 'middle',
     floating: true,
     text: 'Complete Blood Count'
   },
   plotOptions: {
     pie: {
       innerSize: '90%'
     }
   },

   series: [{
     data: [
       ['WBC', 44.2],
       ['RBC', 26.6],
       ['Platlets', 20],
       ['Germs', 3.1],
       ['Bactaria', 5.4]
     ]
   }]
}
