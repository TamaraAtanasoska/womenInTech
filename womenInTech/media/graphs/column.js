	$(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: 'Број на абортуси'
            },
            subtitle: {
                text: 'од 2000 до 2012'
            },
            credits: {
               position: {
                  aligh: 'left',
                  x: 20
               },
               href: 'http://www.iph.mk/',
               text: 'Извор : Институт за јавно здравје | Прикажано на : rodovreactor.mk'
            },
            xAxis: {
                categories: ['2000',
						'2001',
						'2002',
						'2003',
						'2004',
						'2005',
						'2006',
						'2007',
						'2008',
						'2009',
						'2010',
						'2011',
						'2012'

                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Број'
                }
            },

            tooltip: {
                formatter: function() {
                    return ''+
                        this.x +': '+ this.y;
                }
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
                series: [{
                name: 'Абортуси',
                data: [11407,8523,7876,6690,7324,6622,6164,6090,5900,5601,5078,5324,5387
						
						
					   

                     ],
    
            }, 
                
					
                        
				
    
            ]
        });
    });

