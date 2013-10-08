$(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: 'Number of man and women in the Parliament and Government of Macedonia'
            },
            subtitle: {
                text: '2013'
            },
            credits: {
               position: {
                  aligh: 'left',
                  x: 20
               },
               href: 'http://www.reactor.org.mk/',
               text: 'Source : Реактор – истражување во акција | Shown on : rodovreactor.mk'
            },
            xAxis: {
                categories: [
                        'MPs at the parliament of R.M',
						'Ministers in the government of R.M',
						

                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage %'
                }
            },

            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y + '%' ;
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
                data: [32.5,
					   8.7
				    
					

                     ],
    
            }, {
                name: 'Men',
                data: [67.5,
					   91.3
					
					
                        
				],
    
            }]
        });
    });

