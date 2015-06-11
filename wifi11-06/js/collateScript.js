
function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




$(function(){
    

    $(".refineDate .datepicker").datepicker();




    $(".refinePlus i").click(function(){
        var values      = $( ".refineTime .slider" ).slider( "values" );
        var startTime   = values[0];
        var endTime     = values[1];
        var location    = $(".refineLoc select option:selected").val();
        var timeString  = $(".global .slider-value").text();
        if(location!="Select"){
          $(".global .refineList").append('<div class="refineOption "><div class="refineOptionTxt floatL"><h3>'+location+'</h3><p>Dallas, Texas</p><span>'+timeString+'</span></div><div class="refineOptionIcon floatR"><i class="edit"></i><i class="close"></i></div></div>');  
        }
        
         
    

    });

    $(".refineOption .close").click(function(){
            $(this).closest(".refineOption").remove();
    });

    $(".refineList .clr-btn").click(function(){
            $(this).closest(".refineList").find(".refineOption").remove();
    });

    $(".refineListBtn .go").click(function(){

        //----updating user path funnel chart
            var chart =  $('.refineuserGraph').highcharts();
            chart.addSeries({
            name: '',
            //data: [rnd(100,200), rnd(200,300), rnd(200,300), rnd(100,200), rnd(100,200), rnd(100,300), rnd(100,400), rnd(100,600), rnd(100,500), rnd(100,700), rnd(200,600), rnd(100,600)]
            data: [233, 400, 506, 467, 700, 590, 490, 600]
        });

        //----updating path distribution chart
            var container = $(".graphArea");
            container.append('<div class="graph-parent" style="float:left;width:400px;text-align: center;"><h5>3/2/2015 07:15 AM  - 3/6/2015 12:30 PM </h5><div class=" refine-path-dist"></div></div>');
            $(".refine-path-dist:last").highcharts(options);



    });
    

   /*----refine user path funnel (start)----*/


    $('.refineuserGraph').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits :{
            enabled: false
        },
        xAxis: {
            categories: ['9 A.M', '10 A.M', '11 A.M', '12 P.M', '1 P.M', '2 P.M',
                '3 P.M', '4 P.M', '5 P.M', '6 P.M', '7 P.M', '8 P.M'],
            tickWidth: 0,
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        legend: {
            enabled : false
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                enabled: false
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            series: {
                lineColor : "#ffffff",
                lineWidth: 5,
                marker: {
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    radius: 7,
                    symbol: 'circle',
                    lineColor: '#000000'
                }
            },
            area: {
                pointStart: 1940,
                marker: {
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'filter1',
            data: [26, 311, 232, 310, 335, 469, 540,705, 536, 463, 557, 518],
            color: "#c1ecf4"
        }, {
            name: 'filter2',
            data: [335, 425, 350, 420, 250, 400, 526, 560, 769, 560, 705, 571],
            color: "#a8c5d5"    
        }]
    });
 /*----refine user path funnel (end)----*/


/*----refine path distribution (start)----*/

//options for path distribution graph
var options = {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        exporting :{
            enabled: false
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            tickWidth: 0,
            categories: [
                'Front Entrance',
                'Tusca-Greeter',
                'Conf-FL01',
                'Lobby-Conv-West',
                'Conf-FL01-Back',
                'Kitchen-Back House',
                'Suchi',
                'Coffee Station',
                'Front Desk',
                'Bar-Patio',
                'Pool Area',
                'Restaurant',
                'Lobby',
                'Lobby - N. Entrance',
                'Bar',
                'Regency Club',
                'Lobby - N. Entrance',
            ],
                pointWidth : 1,
            title: {
                text: null
            }
        },
        yAxis: {
            gridLineWidth:0,
            pointWidth: 0,
            min: 0,
            title: {
                text: '',
            },
            labels: {
                enabled: false
            }
        },
        tooltip: {

        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                pointWidth: 20
            }
        },
        legend: {
                enabled : false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            color: '#8fb8ce',
            data: [27, 31, 55, 83, 32, 75, 93, 42, 65, 43, 52, 75, 63, 32, 85, 63, 62]
       }]
    };

 $('.refine-path-dist:eq(0)').highcharts(options);
 $('.refine-path-dist:eq(1)').highcharts(options);

/*----refine path distribution (end)----*/
  
});