$(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'bar'
            },
            title: {
                text: 'Discouraged people who are not looking for a job'
            },
            subtitle: {
                text: '2011'
            },
            credits: {
               position: {
                  aligh: 'left',
                  x: 20
               },
               href: 'http://www.stat.gov.mk/',
               text: 'Source : State Statistics Office | Showing on : rodovreactor.mk'
            },
            xAxis: {
                categories: [
                        '15-24',
			'25-34',
			'35-44',
			'45-54',
			'55-64',
			'65+',

                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number'
                }
            },
            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y ;
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
                series: [{
                name: 'Women',
                data: [ 655,
			1473,
			2236,
			3343,
			1802,
			69
                     ],
    
            }, {
                name: 'Man',
                data: [
                        1869,
			2752,
			2107,
			3147,
		        3696,
			86

				],
    
            }]
        });
    });

