var pathData = {
	"Front Entrance" : "",
	"CLARA-FL09"     : "",
	"Conf FI-01"     : "",
	"Lobby"          : {
		"East-Entrance": {
			"Conf Fl-01":{
				"10 Kitchen": "",
				"CLARA-FL09": {
					"CLARA-FL09" : "",
					"10 Bar"     : "",
					"4 Patio"    : "",
					"CLARA-FL05" : "",
					"8 Pool"     : "",
					"5 Suchi"    : ""
				}
			}
		},
		"Convention-west":{
			"4 Patio"    : "",
			"CLARA-FLO5" : "",
			"8 Pool"     : ""
		},
		"Convention-west":"",
		"Convention-North":"",
		"North-Entrance":""
	},
	"Conf FI-03"     : "",
	"Kitchen"        : "",
	"Suchi"          : "",
	"Front Entrance" : "",
	"CLARA-FL09"     : "",
	"Conf FI-01"     : "",
	"Conf FI-03"     : "",
	"Kitchen"        : "",
	"Front Entrance" : "",
	"CLARA-FL09"     : "",
	"Conf FI-01"     : "",
	"Conf FI-01"     : "",
	"Conf FI-01"     : "",
	"All Floors"     : ""
}



jQuery.fn.center = function () {
    this.css("position","fixed");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2)));
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2)));
    return this;
}


function appendWidgets(widgetName){
		if(widgetName==="User"){
			$template = $(".templates").find(".user").clone();
			$(".graph-center-area").append($template);
		}else if(widgetName==="All Campaigns"){
			$template = $(".templates").find(".allCamp").clone();
			$(".graph-center-area").append($template);
			$('.campaign-views').each(function(){
                    $(this).highcharts(optionscampViews);
                });//initialize graph
				
				
				
               
			
		}else if(widgetName==="Associated/Probing/Repeat Users"){
			$template = $(".templates").find(".combined").clone();
			
			$(".graph-center-area").append($template);
			
			 $('.users-container').each(function(){
                    $(this).highcharts(optns);
                });//initialize graph
				
			
		}else if(widgetName==="Average Dwell Time"){
			$template = $(".templates").find(".combined2").clone();
			
			$(".graph-center-area").append($template);
			
			$('.campGraph').each(function(){
                    $(this).highcharts(campGraphOpt);
                });//initialize graph
			
		}else if(widgetName==="Path Distribution"){
			$template = '<div class="graph-container dynamic"> <div class="graph-container-head"> <div class="graph-head-left"><h4>Path Distribution</h4></div> <div class="graph-head-right"> <div class="refresh"> <i></i> </div> <div class="setting-gp"> <i></i> </div> <div class="delete"> <i></i> </div> </div> </div> <div class="graph-container-content"> <!--<div class="checkBox"> <p>Filter</p> <label><input id="inputSelect" type="checkbox"><span>Incoming Customers</span></label> <label><input id="inputSelect" type="checkbox"><span>Incoming Customers</span></label> </div>--> <div id="canvas"> <div class="circle" id="circles-1"></div> </div> <div class="graph-content-top"> <div class="graph-content-left"> <h3>458</h3> <p>Total Visitors</p> <div class="progress-bar"><div class="progress-bar-in"></div></div> <ul> <li><strong>450</strong> Total Views</li> <li><strong>215</strong> Total Conversions</li> </ul> </div> <div class="graph-content-right"> <div class="dropdown"><span>Last 24 hrs</span><i></i> <ul class="drop-option"> <li><a href="javascript:void(0);">Top Campaigns</a></li> <li><a href="javascript:void(0);">Gold Customers</a></li> <li><a href="javascript:void(0);">Ending Soon</a></li> </ul>  </div> <div class="dropdown"><span>All Campaigns</span><i></i> <ul class="drop-option"> <li><a href="javascript:void(0);">1st Floor</a></li> <li><a href="javascript:void(0);">2nd Floor</a></li> <li><a href="javascript:void(0);">3rd Floor</a></li> <li><a href="javascript:void(0);">4th Floor</a></li> </ul> </div> </div> </div> <ul class="floor-detail"> <li><h6></h6><p></p></li> <li><h6></h6><p></p></li> <li><i class="list-circle"></i><h6>Basement</h6><p>No Active Campaigns</p></li> <li><i class="list-circle"></i><h6>Ground Floor</h6><p>Campaign C</p></li>  <li><i class="list-circle"></i><h6>2nd Floor</h6><p>Campaign D</p></li> <li><i class="list-circle"></i><h6>3nd Floor</h6><p>Campaign F</p></li> <li><i class="list-circle"></i><h6>4nd Floor</h6><p>Campaign F</p></li> <li><i class="list-circle"></i><h6>5nd Floor</h6><p>Campaign F</p></li> <li><h6></h6><p></p></li> <li><h6></h6><p></p></li> </ul> <div class="fix-circle"> <div class="floor-camp-info"> <div class="dropdown"><span>All Campaigns</span><i></i> <ul class="drop-option"> <li><a href="javascript:void(0);">Top Campaigns</a></li> <li><a href="javascript:void(0);">Gold Customers</a></li> <li><a href="javascript:void(0);">Ending Soon</a></li> </ul> </div> <div class="day"><i></i><span>Ended 14 days ago</span></div> <ul class="floor-user"> <li><h3 data-connectedUsers="">112</h3><p>Connected Users</p></li> <li><h3 data-probingUsers="">75</h3><p>Probing Users</p></li> </ul> </div> <div class="floor-info"> <div class="spacer85"></div> <button class="white-btn create-campaign-button">Create Campaign</button> <p>15 Visited just now</p> </div> </div> <ul class="user-connection"> <li><i></i><span>Connected Users</span></li> <li><i class="blue-icon"></i><span>Probing Users</span></li> </ul> </div> </div>';
			
			$(".graph-center-area").append($template);
			
			/*-initialize widgets for path(start)-*/
			  var owl = $(".floor-detail");
                    owl.owlCarousel({
                        autoWidth:false,
                        mouseDrag:false,
                        items: 5,
                        startPosition:3,
                        callbacks:true,
                        navSpeed: 490

                    });
                    
                 $(".dynamic .list-circle:eq(3)").closest(".owl-item").addClass("current-item"); 
                 $(".dynamic").removeClass("dynamic");
                    /*-initialize circle-*/
   

                        var s = $(".circle").length;
	  var circle = Circles.create({
					id:         "circles-"+s,
					value:      43,
					radius:     150,
					width:      15,
					colors:     ['#46627D', '#5EB9E1'],
					text: null
				});
				/*-initialize widgets for path(stop)-*/
			
		}		
	setTimeout(function(){
	
	$(".all-campaigns, .customer-stat, .last-scene, .location-section,.loc-section").getNiceScroll().remove();
	$(".nicescroll-rails").remove();
    $(".all-campaigns:visible, .customer-stat:visible, .last-scene:visible, .location-section:visible").niceScroll({
         cursorcolor: "#d9d9d9"
     });
	
	},10);
 

}

/*----options for chart (start)----*/

var data = ([
5,
7,
3,
5,
3,
4,
8,
9,
7,
10,
4
    ]);

var data1 = ([
8,
4,
8,
9,
7,
5,
2,
8,
6,
3,
4
    ]);

var optns = {
      title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        exporting: {
            enabled: false
        },
		credits: {
			enabled: false
		},
        xAxis: [{
            crosshair: true,
            tickWidth: 0,
			gridLineWidth: 0,
			 labels: {
                formatter: function () {
                    if(this.value === 0 )
                    return '10 A.M';
                else if(this.value === 10)
                    return '12 P.M';
                else if (this.value === 20)
                    return '2 P.M';
                else if (this.value === 30)
                    return '4 P.M';
                else if (this.value === 40)
                    return '6 P.M';
                }
            } 
            
        }],
        yAxis: [{ // Primary yAxis
			gridLineWidth: 0,
            labels: {
            },
            title: {
                text: ''
            }
        }, { // Secondary yAxis
            title: "",
            opposite: true,
			gridLineWidth: 0
        }],
       
        tooltip: {
            shared: true
        },
        legend: {
            enabled: true,
            verticalAlign: 'bottom',
            align: 'right',
            symbolWidth: 20,
            symbolHeight: 8,
            symbolRadius: 3
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 2,
                stacking: 'normal'
            },
			series : {
				marker: {
                    enabled: false
                },
				lineColor: '#d6d6d6'
			}
        },
        series: [{
            name: 'Repeat Users',
            type: 'areaspline',
            data: [0, 2, 3, 5, 6, 7, 10, 11, 9, 5, 6, 2, 3, 7, 6, 6, 3, 4, 9, 12, 7, 6, 7, 9, 8, 6, 4, 2, 3, 4, 5, 6, 8, 7, 5, 9, 8, 6, 3, 4, 7, 9, 5, 6, 4, 2],
            color:"#e7e7e7"
        },{
            name: 'Associated Users',
            type: 'column',
            yAxis: 1,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 35, 35, 66, 0, 0, 0, 0, 0, 0, 0, 23, 0, 35, 66, 13, 14, 21, 19, 15, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            tooltip: {
            },
            color:"#63c0eb"

        },{
            name: 'Probing Users',
            type: 'column',
            yAxis: 1,
            data: [12, 23, 35, 46, 66, 13, 14, 21, 19, 15, 16, 12, 23, 35, 35, 66, 13, 14, 21, 19, 15, 16, 12, 23, 35, 35, 66, 13, 14, 21, 19, 15, 16, 12, 23, 35, 35, 66, 13, 14, 21, 19, 15, 16, 24, 29],
            tooltip: {
            },
            color:"#45637f"

        }]
    };



var optionscampViews = {
       chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        exporting: {
            enabled: false
        },
		credits: {
			enabled: false
		},
        xAxis: {
            lineWidth: 0,
            tickWidth: 0,
            categories: ['S', 'M', 'T', 'W', 'Th', 'F','S']
        },
        yAxis: {
		    lineWidth: 0,
            labels: {
                enabled: false
            },
            gridLineWidth: 0,
            alternateGridColor: '#f8f8f8',
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            enabled: false
        },
		       plotOptions: {
            series: {
                marker: {
                    radius: 3,
                    fillColor: '#FFFFFF',
                    lineWidth: 2,
                    lineColor: null // inherit from series
                }
            }
        },
        series: [{
            name: 'Views',
            data: [1, 4, 10, 6, 7, 8, 9],
            color: "#56c3b0"
        }]
    };


var campGraphOpt = {
        chart: {
            type: 'column'
        },
        legend: {
                enabled:false
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        exporting: {
            enabled: false
        },
		credits: {
			enabled: false
		},
        xAxis: {
            tickWidth: 0,
            categories: [
                'Front Entrance',
                'CLARA-FL09',
                'Conf FL-01',
                'Lobby',
                'Conf FL-03',
                'Kitchen',
                'Front Desk',
                'Pool-Area',
                'CLARA-FL09',
                'Conf FL-01',
                'Lobby'
            ],
            crosshair: true
        },
        yAxis: {
            //categories:['9am','10am','9am','10am','9am','10am','9am','10am','9am','10am','9am' ],
              labels: {
                formatter: function () {
                    if(this.value < 25)
                    return '10 A.M';
                else if(this.value === 25)
                    return '12 P.M';
                else if (this.value < 50)
                    return '2 P.M';
                else if (this.value < 75)
                    return '4 P.M';
                else if (this.value < 100)
                    return '6 P.M';
                else if (this.value === 100)
                    return '8 P.M';
                }
            },
            gridLineWidth: 0,
            title: {
                text: ''
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                stacking: 'percent'
            }
        },
                 series: [{
            name: '',
            data: data,
                     color: "#e9edf0"
        }, {
            name: '',
            data: data1,
            color: "#56c3b0"
        }]
    };



/*----options for chart (end)----*/


$(function () {
     $('body').label_radio_check();
    
    $(document).on("click",".create-campaign-button",function(){
	$("body").css({"overflow":"hidden"});
    $("#create-campaign-popup").show();
	$("#create-campaign-popup").center();
        $(".overlay").show();
});


$(document).on("keyup",".camp-name",function(){
    if($(this).val()!==""){
        $("#create-campaign-popup .fancy-left ul li:eq(0)").addClass("active");
    }
});



$(document).on("change",".camp-location",function(){
    $("#create-campaign-popup .fancy-left ul li:eq(1)").addClass("active");
});
$(".camp-location").selectbox();

$(document).on("click",".week-day li",function(){
    $("#create-campaign-popup .fancy-left ul li:eq(3)").addClass("active");
});





    
    
    
    
    
    
    setTimeout(function(){
         $(".owl-item.active:eq(2)").addClass("current-item");
    },10);

/*----popup (start)----*/

$(".popupClose, .cancel").click(function(){
	$("body").css({"overflow":""});
	$(this).closest(".fancy-save").hide();
        $(".overlay").fadeOut();
});

$(document).on("click",".time-nav li",function(){
	$(this).closest(".time-nav").find("li").removeClass("active");
	$(this).addClass("active");
});

$(".save-widgets-btn").click(function(){
$("body").css({"overflow":"hidden"});

	$("#save-widget-popup").show();
	$("#save-widget-popup").center();
        $(".overlay").show();
	
	$(".moreCategoriesSelect").selectbox();   
        
        if($("#save-widget-popup .sbOptions li").length>3){
             $(".sbOptions").niceScroll({
                cursorcolor: "#d9d9d9",
                cursorwidth: "5px",
                zindex: "99999",
                autohidemode: false
            });
        }
        
    
   
	
});

 $(".sbHolder").on("click",function(){
        $(".sbOptions").getNiceScroll().resize();
    });
    
    $(".widget-list").mouseover(function(){
        $(this).getNiceScroll().resize();
    });
    
    $(".widget-gp-list").mouseover(function(){
        $(this).getNiceScroll().resize();
    });

$(".save-widget-group").click(function(){

	var value     = $(".groupRadio[name=optionsRadios]:checked").val();
	var groupName = $.trim($("#groupName").val());
	
	
	
	
	if(value==="groupAdd"){
	
		if( groupName!==""){
			$(".widget-wrap .widget-gp-list").append('<li class="ui-draggable ui-draggable-handle"><a href="javascript:void(0);"><span data-groupName="'+groupName+'">'+groupName+'</span><i></i></a><ul></ul></li>');
			
			$(".graph-container:visible").each(function(){
				var widgetName = $(this).find(".graph-head-left h4").text();
			$("[data-groupName="+groupName+"]").closest("li").find("ul").append('<li><a href="javascript:void(0);"><span>'+widgetName+'</span></a></li>');
			});
			$(".existing-groups").append("<option>"+groupName+"</option>").selectbox("detach").selectbox();
			dragWidgetGroup();
			
		}
		
	}else if(value==="groupOverwrite"){
	
		var value = $(".existing-groups").val();

		$("[data-groupName]").each(function(){
			var groupName = $(this).attr("data-groupName");
			if(groupName===value){
			$this = $(this);
			$(this).closest("li").find("ul").empty();
			
			$(".graph-container:visible").each(function(){
				widgetName = $(this).find(".graph-head-left").text();
				$this.closest("li").find("ul").append('<li><a href="javascript:void(0);"><span>'+widgetName+'</span></a></li>');
			});
				return false;
			}
		});
		
	}
	$("#groupName").val("");
	$(this).closest("#save-widget-popup").hide();
	$(".overlay").fadeOut();
	$("body").css({"overflow":""});
});
$(document).on("click",".widget-gp-list a",function(){
	$(this).next("ul").slideToggle();
	$(this).find("i").toggleClass("active");
});

$(".create-campaign-button").click(function(){
	$("#create-campaign-popup").show();
        $("#create-campaign-popup").center();    
        $(".overlay").show();
	
}); 


/*--draggable widget group(start)--*/

dragWidgetGroup();

function dragWidgetGroup(){

$(".widget-gp-list").find("[data-groupname]").closest("li").draggable({

	stop: function(event,ui){
		$(ui.helper).find("li").each(function(){
			var widgetName = $(this).find("span").text();
			appendWidgets(widgetName);
			});
	},
	helper: "clone",
	revert: "invalid",
	
});

}


$( ".graph-center-area" ).droppable({
  accept: ".widget-gp-list li",
  drop: function(){
	$(".graph-center-area").empty();
  }
});

/*--draggable widget group(end)--*/


/*----path distribution (start)----*/
var owl = $(".floor-detail");
owl.owlCarousel({
    autoWidth:false,
    mouseDrag:false,
    items: 5,
    startPosition:3,
    callbacks:true,
    navSpeed: 490

});
$(document).on("click",".owl-next, .owl-prev",function(){
    $this = $(this);
    if(!$(this).hasClass("disabled")){
    setTimeout(function(){
           $this.closest(".graph-container").find(".owl-item.active").removeClass("current-item");
           $this.closest(".graph-container").find(".owl-item.active:eq(2)").addClass("current-item");
           
             var ind = $this.closest(".graph-container").find(".current-item").index();//index of blue icon

            if(ind <= $this.closest(".graph-container").find(".list-circle").length+1 && ind >= 2){
 
         if($this.hasClass("owl-next")){
        $this.closest(".graph-container").find("[data-connectedUsers]").text(parseInt($this.closest(".graph-container").find("[data-connectedUsers]").text())+1);
        $this.closest(".graph-container").find("[data-probingUsers]").text(parseInt($this.closest(".graph-container").find("[data-probingUsers]").text())+1);
				
    }else if($this.hasClass("owl-prev")){
		$this.closest(".graph-container").find("[data-connectedUsers]").text(parseInt($this.closest(".graph-container").find("[data-connectedUsers]").text())-1);
		$this.closest(".graph-container").find("[data-probingUsers]").text(parseInt($this.closest(".graph-container").find("[data-probingUsers]").text())-1);
    } 
			var prob         = parseInt($("[data-probingUsers]").text());
			var total        = parseInt($("[data-connectedUsers]").text()) + parseInt($("[data-probingUsers]").text());
			var arc          = parseInt((prob/total)*100);
			var thisCircleId = $this.closest(".graph-container").find(".circle").attr("id");
			var circle       = Circles.create({
					id:         thisCircleId,
					value:      arc,
					radius:     150,
					width:      15,
					colors:     ['#46627D', '#5EB9E1'],
					text: null
				});
	
             
        }
    //enable/disable buttons
    
    if(ind === $this.closest(".graph-container").find(".list-circle").length+1){
        $this.closest(".graph-container").find(".owl-next").addClass("disabled");
        $this.closest(".graph-container").find(".owl-prev").removeClass("disabled");
    }else if(ind == 2){
        $this.closest(".graph-container").find(".owl-prev").addClass("disabled");
        $this.closest(".graph-container").find(".owl-next").removeClass("disabled");
    }else{
		$this.closest(".graph-container").find(".owl-prev").removeClass("disabled");
        $this.closest(".graph-container").find(".owl-next").removeClass("disabled");
	}     
    },300);
    }
});

$(document).on("click",".list-circle",function(){
    var index       = $(this).closest(".floor-detail").find(".list-circle").index(this);
    var currentItem = $(this).closest(".graph-container").find(".current-item").index()-2;
    var diff = Math.abs(currentItem - index);
   for(var i=0;i<diff;i++){
       if(currentItem > index){
           $(this).closest(".graph-container").find(".owl-prev").trigger("click");
       }else{
           $(this).closest(".graph-container").find(".owl-next").trigger("click"); 
       }
   }
});
     
/*----path distribution (end)----*/





/*----widget (start)----*/

$(document).on("click",".delete",function(){
	$(this).closest(".graph-container").hide();
});



/*--user widget (start)--*/
$(document).on("click",".customer-stat .user-type",function(){
    var name          = $(this).find(".left-txt h6").text();
    var visits        = $(this).find(".mid-txt span").text();
    var favouriteSpot = $(this).find(".right-txt span").text();

    $(this).closest(".graph-container").find("[data-name]").text(name);
    $(this).closest(".graph-container").find("[data-visits]").text(visits);
    $(this).closest(".graph-container").find("[data-farouriteSpot]").text(favouriteSpot);
    
   
    $(this).closest(".graph-container").find('.last-scene ul').shuffle();
    $(this).closest(".graph-container").find('.last-scene ul li').each(function(ind){
        if(ind <= visits-1){
            $(this).closest(".graph-container").find('.last-scene ul li:eq('+ind+')').show();
        }else{
            $(this).closest(".graph-container").find('.last-scene ul li:eq('+ind+')').hide();
        }
    });
});


$(document).on("click","[data-location]",function(){
        $(this).closest(".dropdown").find("span").text($(this).text());
	$(this).closest(".graph-container").find(".customer-stat").shuffle();
	$(this).closest(".graph-container").find("[data-totalCustomer]").text(Math.floor(Math.random() * 200 + 1));
	$(this).closest(".graph-container").find("[data-retUsers]").text(Math.floor(Math.random() * 150 + 1));
	$(this).closest(".graph-container").find("[data-probUsers]").text(Math.floor(Math.random() * 350 + 1));
	$(this).closest(".graph-container").find("[data-assocUsers]").text(Math.floor(Math.random() * 250 + 1));
});



/*--user widget (end)--*/

/*--all campaigns(start)--*/

$(document).on("click",".all-campaigns .user-camp-det",function(){
   $(this).closest(".graph-container").find(".refresh").removeClass("refreshed");//now widget can be refreshed
    var campaignName     = $(this).find(".left-camp-del span").text();
    var campaingLocation = $(this).find(".left-camp-del .map-list p").text();
    $(this).closest(".graph-container").find("[data-campaignName]").text(campaignName);
    $(this).closest(".graph-container").find("[data-campaignLocation]").text(campaingLocation);
    $(this).closest(".graph-container").find('.location-section ul').shuffle();
    var chart = $(this).closest(".graph-container").find(".campaign-views").highcharts();

    
    function r(){//putting random values (for demo purpose)
		return Math.floor((Math.random() * 10) + 1);
    }	
	chart.series[0].update({
		data: [r(),r(),r(),r(),r(),r(),r()]
	});
    
});

$(document).on("click",".camp-detail li",function(){
    
  $(".camp-detail li").not($(this)).removeClass("active");  
if(!$(this).hasClass("active")){
    $(this).closest(".graph-container").find(".all-campaigns").shuffle();
}
    $(this).addClass("active");
  
});

/*--all campaigns(end)--*/

/*----widget (end)----*/



 //random shuffle function for demo purpose. Replace this with actuall data
    $.fn.shuffle = function() {
        return this.each(function(){
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    };    
    $.shuffle = function(arr) {
        for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
        return arr;
    };



/*----popup (end)----*/

$(document).on("click",".refresh",function(){
    var chart = 0;
    if(!$(this).hasClass("refreshed")){
        
        $(this).addClass("refreshed");
        
        var thisCircleId = $(this).closest(".graph-container").find(".circle").attr("id");
			Circles.create({
					id:         thisCircleId,
					value:      43,
					radius:     150,
					width:      15,
					colors:     ['#46627D', '#5EB9E1'],
					text: null
				});
                                
        //move carousel to default position
        
    var index       = 3;
    var currentItem =  $(this).closest(".graph-container").find(".current-item").index()-2;
    var diff = Math.abs(currentItem - index);
   for(var i=0;i<diff;i++){
       if(currentItem > index){
           $(this).closest(".graph-container").find(".owl-prev").trigger("click");
       }else{
           $(this).closest(".graph-container").find(".owl-next").trigger("click"); 
       }
   }
        
        
        
        
        
    $(".select-campaigns span").text("Select Campaigns");
    $(".select-location span").text("Select Location");
	$(".select-user span").text("Select User");
    $(this).closest(".graph-container").find(".customer-stat, .last-scene ul, .location-section ul, .all-campaigns").shuffle();
    $(this).closest(".graph-container").find("[data-totalcustomer]").text(Math.floor(Math.random() * 200 + 1));
    $(this).closest(".graph-container").find("[data-retusers]").text(Math.floor(Math.random() * 200 + 1));
    $(this).closest(".graph-container").find("[data-probusers]").text(Math.floor(Math.random() * 200 + 1));
    $(this).closest(".graph-container").find("[data-assocusers]").text(Math.floor(Math.random() * 200 + 1));
    
    if($(this).closest(".graph-container").find(".campaign-views").length){
        chart = $(".campaign-views").highcharts();
    }else if($(this).closest(".graph-container").find(".users-container").length){
        chart = $(".users-container").highcharts();
    }else if($(this).closest(".graph-container").find(".campGraph").length){
        chart = $(".campGraph").highcharts();
    }
  
    $(this).closest(".graph-container").find(".time-nav li:eq(0) a").trigger("click");
    var options = chart.options;
    chart = new Highcharts.Chart(options);
    
    
  
    
    }else{
        //do nothing 'coz already refreshed
    }
});

$(".select-location").on("click",function(){
     $(this).closest(".graph-container").find(".refresh").removeClass("refreshed");//now widget can be refreshed
    
});

/*----search map (start)----*/
$('#searchHotel').focus(function () {
			$(".search-icon").addClass('cross');
		}).blur(function () {
			$(".search-icon").removeClass('cross');
		});
	
$(".search-icon").click(function(){
			$( ".search-id" ).val("").autocomplete("search", "");
	});

$( ".search-id" ).keyup(function(){
		if($(this).val()===""){
			$(".search-icon").removeClass('cross');
		}else{
			$(".search-icon").addClass('cross');
		}
	});	
/*----search map (end)----*/


$(".all-campaigns, .customer-stat, .loc-section,.loc-section, .last-scene, .location-section").niceScroll({
	cursorcolor: "#d9d9d9"
});

/*--dropdown(start)--*/
$(document).on("click",".dropdown i",function(){
    $("ul.drop-option").not($(this).closest(".dropdown").find("ul.drop-option")).slideUp();
	$(".dropdown").not($(this).closest(".dropdown")).removeClass("active");
	$(this).closest(".dropdown").toggleClass("active");
	$(this).closest(".dropdown").find("ul.drop-option").slideToggle();
});

$(document).on("click","ul.drop-option li",function(){
	var text = $(this).find("a").text();
	$(this).closest(".dropdown").find("span:eq(0)").text(text);
	$(this).closest(".drop-option").slideUp();
	$(this).closest(".dropdown").removeClass("active");
});

$(".dropdown").each(function(){
	$(this).find(".drop-option").css("min-width",$(this).width()+15);
	//$(this).find(".dropdown-arrow").css("left",$(this).width()-7)
});

/*--dropdown(end)--*/


/*----close menu on body click(start)----*/

$(document).mouseup(function (e) {
			var container = $(".dropdown, .drop-option");
	
			if (!container.is(e.target) // if the target of the click isn't the container...
					&& container.has(e.target).length === 0) // ... nor a descendant of the container
			{
					$(".drop-option").slideUp();
					$(".dropdown").removeClass("active");
					
			}
    
});

/*----close menu on body click(end)----*/

function adjustScroll(){
    
    $(".widget-gp-list, .widget-list").getNiceScroll().resize();
    
}


var x = 0;
$(".widget-wrap").draggable({
     containment: 'parent',
    drag: function(event, ui){
        if(ui.offset.left <= $(window).width()/2){
            $(".widget-wrap").addClass("widget-right"); 
       }else{
           $(".widget-wrap").removeClass("widget-right");
       } 
	   $(".widget-wrap").addClass("still-dragging");
     },
    stop: function(events, ui){
        if($(".widget-head").hasClass("collapsed")){
           x = 40;
        }else{
           x = 190;
        }
		wh = $(window).scrollTop()+$(window).height();
        $newleft = $(window).width() - ($(".widget-wrap").width() + parseInt($(".widget-wrap").css('left')));
	   if(ui.offset.left <= $(window).width()/2){
           if(($(".widget-wrap").offset().top >= wh) || (ui.offset.top - $(window).scrollTop() <= 0)){
                    $(".widget-wrap").animate({"left":"0","top":$(window).height()/2},adjustScroll()).addClass("widget-right");
                }else{
                    $(".widget-wrap").animate({"left":"0"},adjustScroll()).addClass("widget-right");
                    }
       }else{
            if(($(".widget-wrap").offset().top >= wh) || (ui.offset.top - $(window).scrollTop() <= 0)){
             	$(".widget-wrap").css("left","").css("right",$newleft).animate({"right":0,"top":$(window).height()/2},adjustScroll()).removeClass("widget-right");
            }else{
           		$(".widget-wrap").css("left","").css("right",$newleft).animate({"right":0},adjustScroll()).removeClass("widget-right");
            }
       } 
	   setTimeout(function(){
		$(".widget-wrap").removeClass("still-dragging");
		}, 300);
    }
});
$(".widget-wrap").css("left",$(window).width() - $(".widget-wrap").width());//setting default left on window load
/*----chart campGraphVal (start)----*/
$(".widget-head i").click(function(){
if(!$(".still-dragging").length){  
$(this).closest(".widget-head").toggleClass("opened");
$(".widget-head h6,.widget-inner-wrapper").slideToggle(500);
/*$(".widget-list, .widget-gp-list").slideToggle();

$(".widget-gp").fadeToggle();*/
if($(".widget-head").hasClass("opened")){
    $(".widget-wrap").animate({"width":"195px"});
        //$(".widget-wrap").animate({"width":"195"},"fast",function(){
            adjustLeft();
       // });
}else{
    $(".widget-wrap").animate({"width":"36px"});
   // setTimeout(function(){
       // $(".widget-wrap").animate({"width":"40"},function(){
            adjustLeft();
       // });
  //  },100);
        
}
}
//final adjustment
        function adjustLeft(){
            if(!$(".widget-wrap").hasClass("widget-right")){
				 if($(".widget-head").hasClass("opened")){
                 $(".widget-wrap").css("left","").animate({"right":0});
				 }else{
				 $(".widget-wrap").css("left","").animate({"right":0});
				 }
            }
        }

    
});




    $('.campGraph').highcharts(campGraphOpt);



/*----chart campGraphVal (end)----*/


/*----campaign view chart (start)----*/

$('.campaign-views').highcharts(optionscampViews);


/*----campaign view chart (end)----*/


/*----users-container chart (start)----*/

 var RUdata = ([
/* Jan 2008 */
[1199145600000,0],
[1199149200000,0],
[1199156400000,2],
[1199160000000,3],
[1199163600000,4],
[1199167200000,4],
[1199170800000,5],
[1199174400000,6],
[1199178000000,7],
[1199145600000,10],
[1199145600000,11],
[1199145600000,9],
[1199145600000,5],
[1199145600000,6],
[1199145600000,2],
[1199145600000,3],
[1199145600000,7],
[1199145600000,6],
[1199145600000,6],
[1199145600000,3],
[1199145600000,4],
[1199145600000,9],
[1199145600000,12],
[1199145600000,7],

/* Feb 2008 */
[1199145600000,6],
[1199145600000,7],
[1199145600000,9],
[1199145600000,8],
[1199145600000,6],
[1199145600000,4],
[1199145600000,2],
[1199145600000,3],
[1199145600000,4],
[1199145600000,5],
[1199145600000,6],
[1199145600000,8],
[1199145600000,7],
[1199145600000,5],
[1199145600000,9],
[1199145600000,8],
[1199145600000,6],
[1199145600000,3],
[1199145600000,4],
[1199145600000,7],
/* Mar 2008 */
[1199145600000,9],
[1199145600000,5],
[1199145600000,6],
[1199145600000,4],
[1199145600000,2]
]);


var AUdata = ([
/* Jan 2008 */
[1199232000000,0],
[1199318400000,0],
[1199404800000,0],
[1199664000000,0],
[1199750400000,0],
[1199836800000,0],
[1199923200000,0],
[1200009600000,0],
[1200268800000,0],
[1200355200000,0],
[1200441600000,0],
[1200528000000,0],
[1200614400000,23],
[1200960000000,35],
[1201046400000,35],
[1201132800000,66],
[1201219200000,0],
[1201478400000,0],
[1201564800000,0],
[1201651200000,0],
[1201737600000,0],

/* Feb 2008 */
[1201824000000,0],
[1202083200000,0],
[1202169600000,23],
[1202256000000,0],
[1202342400000,35],
[1202428800000,66],
[1202688000000,13],
[1202774400000,14],
[1202860800000,21],
[1202947200000,19],
[1203033600000,15],
[1203379200000,16],
[1203465600000,0],
[1203552000000,0],
[1203638400000,0],
[1203897600000,0],
[1203984000000,0],
[1204070400000,0],
[1204156800000,0],
[1204243200000,0],
/* Mar 2008 */
[1204502400000,0],
[1204588800000,0],
[1204675200000,0],
[1204761600000,0],
[1204848000000,0]
]);


var PUdata = ([
/* Jan 2008 */
[1199232000000,12],
[1199318400000,23],
[1199404800000,35],
[1199664000000,46],
[1199750400000,66],
[1199836800000,13],
[1199923200000,14],
[1200009600000,21],
[1200268800000,19],
[1200355200000,15],
[1200441600000,16],
[1200528000000,12],
[1200614400000,23],
[1200960000000,35],
[1201046400000,35],
[1201132800000,66],
[1201219200000,13],
[1201478400000,14],
[1201564800000,21],
[1201651200000,19],
[1201737600000,15],

/* Feb 2008 */
[1201824000000,16],
[1202083200000,12],
[1202169600000,23],
[1202256000000,35],
[1202342400000,35],
[1202428800000,66],
[1202688000000,13],
[1202774400000,14],
[1202860800000,21],
[1202947200000,19],
[1203033600000,15],
[1203379200000,16],
[1203465600000,12],
[1203552000000,23],
[1203638400000,35],
[1203897600000,35],
[1203984000000,66],
[1204070400000,13],
[1204156800000,14],
[1204243200000,21],
/* Mar 2008 */
[1204502400000,19],
[1204588800000,15],
[1204675200000,16],
[1204761600000,24],
[1204848000000,29]
]);





/*--graph time/date/month filter(start)--*/

$(document).on("click","[data-filter]",function(){
        var chart = $(this).closest(".graph-container").find(".users-container").highcharts();


	//var chart = $(".users-container").highcharts();
	var options = chart.options;
	var filter = $(this).text();
	if(filter==="Day"){
		chart.options.xAxis[0].labels.formatter = function () {
                    if(this.value === 0 )
                    return '10 A.M';
                else if(this.value === 10)
                    return '12 P.M';
                else if (this.value === 20)
                    return '2 P.M';
                else if (this.value === 30)
                    return '4 P.M';
                else if (this.value === 40)
                    return '6 P.M';
                };
	chart = new Highcharts.Chart(options);	
            $(".menu-day").show();
            $(".menu-week, .menu-month").hide();
	}else if(filter==="Week"){
	chart.options.xAxis[0].labels.formatter = function () {
                    if(this.value === 0 )
                    return 'Monday';
                else if(this.value === 10)
                    return 'Wednesday';
                else if (this.value === 20)
                    return 'Friday';
                else if (this.value === 30)
                    return 'Saturday';
                else if (this.value === 40)
                    return 'Sunday';
                };
	chart = new Highcharts.Chart(options);
            $(".menu-week").show();
            $(".menu-day, .menu-month").hide();
	}else if(filter==="Month"){
	chart.options.xAxis[0].labels.formatter = function () {
                    if(this.value === 0 )
                    return 'Jan';
                else if(this.value === 10)
                    return 'Mar';
                else if (this.value === 20)
                    return 'May';
                else if (this.value === 30)
                    return 'Jul';
                else if (this.value === 40)
                    return 'Sep';
                };
	chart = new Highcharts.Chart(options);
            $(".menu-month").show();
            $(".menu-day, .menu-week").hide();
	}
});

$(document).on("click","[data-filtermenu]",function(){
   $(this).closest(".dropdown").find("span:eq(0)").text($(this).text());
   if($(this).hasClass("active")){
      // do nothing
   }else{
        function r(){
		return Math.floor((Math.random() * 35) + 1);
    }
        var chart = $(this).closest(".graph-container").find(".users-container").highcharts();
        chart.series[0].update({
		data: [r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r()]
	});
   chart.series[1].update({
		data: [r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r()]
	});
   chart.series[2].update({
		data: [r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r()]
	});
       
       $(this).closest("ul").find("li a").removeClass("active");
       $(this).addClass("active");
   }
});


$(document).on("click","[data-filterMenu2]",function(){
   $(this).closest(".dropdown").find("span:eq(0)").text($(this).text());
   if($(this).hasClass("active")){
      // do nothing
   }else{
        function r(){
		return Math.floor((Math.random() * 10) + 1);
    }
        chart = $(this).closest(".graph-container").find(".campGraph").highcharts();

        
        chart.series[0].update({
		data: [r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r()]
	});
        chart.series[1].update({
		data: [r(),r(),r(),r(),r(),r(),r(),r(),r(),r(),r()]
	});
       
       $(this).closest("ul").find("li a").removeClass("active");
       $(this).addClass("active");
   }
});


$(document).on("click","[data-filter2]",function(){
        var chart = $(this).closest(".graph-container").find(".campGraph").highcharts();

	
	var options = chart.options;
	var filter = $(this).text();
	if(filter==="Day"){
		chart.options.yAxis[0].labels.formatter = function () {
                    if(this.value < 25)
                    return '10 A.M';
                else if(this.value === 25)
                    return '12 P.M';
                else if (this.value < 50)
                    return '2 P.M';
                else if (this.value < 75)
                    return '4 P.M';
                else if (this.value < 100)
                    return '6 P.M';
                else if (this.value == 100)
                    return '8 P.M';
                };
                chart.options.series[0].data = [1,2,3,4,5,6,7,8,9,10,11];
	chart = new Highcharts.Chart(options);	
            $(".menu-day2").show();
            $(".menu-week2, .menu-month2").hide();
	}else if(filter==="Week"){
	chart.options.yAxis[0].labels.formatter = function () {
            if(this.value < 25)
                    return 'Monday';
                else if(this.value == 25)
                    return 'Tuesday';
                else if (this.value < 50)
                    return 'Wednesday';
                else if (this.value < 75)
                    return 'Thursday';
                else if (this.value < 100)
                    return 'Friday';
                else if (this.value == 100)
                    return 'Saturday';
                };
                chart.options.series[0].data = [3,3,5,6,7,3,6,8,4,5,9];
	chart = new Highcharts.Chart(options)
            $(".menu-week2").show();
            $(".menu-day2, .menu-month2").hide();
	}else if(filter==="Month"){
	chart.options.yAxis[0].labels.formatter = function () {
               if(this.value < 25)
                    return 'Jan';
                else if(this.value == 25)
                    return 'Mar';
                else if (this.value < 50)
                    return 'May';
                else if (this.value < 75)
                    return 'Jul';
                else if (this.value < 100)
                    return 'Sep';
                else if (this.value == 100)
                    return 'Nov';
                };
                chart.options.series[0].data = [2,6,3,5,8,5,7,3,4,3,3];
	chart = new Highcharts.Chart(options);
            $(".menu-month2").show();
            $(".menu-day2, .menu-week2").hide();
	}
});
/*--graph time/date/month filter(end)--*/
//$(".time-input input").datepicker({
//onSelect: function(){
//if($(".time-period input:eq(0)").val()!=="" && $(".time-period input:eq(1)").val()!==""){
//$("#create-campaign-popup .fancy-left ul li:eq(2)").addClass("active");
//}
//}
//});//datepicker for create new camaign

$(".time-input .from").datepicker({
    changeYear: true,
    changeMonth:true,
    onSelect : function(){
        var max = $(".time-input .from").datepicker( "getDate" );
        $(".time-input .to").datepicker( "option", "minDate", max );
    }
});
$(".time-input .to").datepicker({
     changeYear: true,
     changeMonth:true,
     onSelect : function(){
         var min = $(".time-input .to").datepicker( "getDate" );
         $(".time-input .from").datepicker( "option", "maxDate", min );
    }
});


$(".graph-center-area").sortable({
    stop: function( event, ui ) {
        $(".all-campaigns, .customer-stat, .loc-section,.loc-section, .last-scene, .location-section").getNiceScroll().resize();
    },
	handle:".graph-container-head",
    revert: true,
    cancel: '.middle-wrap'
});

$(".widget-item").draggable({
      cursor: "move",
      connectToSortable: ".graph-center-area",
      revert: "invalid",
      helper: "clone",
       stop: function(event, ui) {
           $(ui.helper).addClass("temp");
           var s = $(".circle").length + 1;
            //select appropriate widget template for dropping
                if($(event.target).hasClass("user")){
              $template = $(".templates").find(".user").clone();
               }else if($(event.target).hasClass("combined")){
              $template = $(".templates").find(".combined").clone();
               }else if($(event.target).hasClass("combined2")){
              $template = $(".templates").find(".combined2").clone();
               }else if($(event.target).hasClass("allCamp")){
              $template = $(".templates").find(".allCamp").clone();
               }else if($(event.target).hasClass("path")){
              $template = '<div class="graph-container dynamic"> <div class="graph-container-head"> <div class="graph-head-left"><h4>Path Distribution</h4></div> <div class="graph-head-right"> <div class="refresh"> <i></i> </div> <div class="setting-gp"> <i></i> </div> <div class="delete"> <i></i> </div> </div> </div> <div class="graph-container-content"> <!--<div class="checkBox"> <p>Filter</p> <label><input id="inputSelect" type="checkbox"><span>Incoming Customers</span></label> <label><input id="inputSelect" type="checkbox"><span>Incoming Customers</span></label> </div>--> <div id="canvas"> <div class="circle" id="circles-'+s+'"></div> </div> <div class="graph-content-top"> <div class="graph-content-left"> <h3>458</h3> <p>Total Visitors</p> <div class="progress-bar"><div class="progress-bar-in"></div></div> <ul> <li><strong>450</strong> Total Views</li> <li><strong>215</strong> Total Conversions</li> </ul> </div> <div class="graph-content-right"> <div class="dropdown"><span>Last 24 hrs</span><i></i> <ul class="drop-option"> <li><a href="javascript:void(0);">Top Campaigns</a></li> <li><a href="javascript:void(0);">Gold Customers</a></li> <li><a href="javascript:void(0);">Ending Soon</a></li> </ul>  </div> <div class="dropdown"><span>All Campaigns</span><i></i> <ul class="drop-option"> <li><a href="javascript:void(0);">1st Floor</a></li> <li><a href="javascript:void(0);">2nd Floor</a></li> <li><a href="javascript:void(0);">3rd Floor</a></li> <li><a href="javascript:void(0);">4th Floor</a></li> </ul> </div> </div> </div> <ul class="floor-detail"> <li><h6></h6><p></p></li> <li><h6></h6><p></p></li> <li><i class="list-circle"></i><h6>Basement</h6><p>No Active Campaigns</p></li> <li><i class="list-circle"></i><h6>Ground Floor</h6><p>Campaign C</p></li>  <li><i class="list-circle"></i><h6>2nd Floor</h6><p>Campaign D</p></li> <li><i class="list-circle"></i><h6>3nd Floor</h6><p>Campaign F</p></li> <li><i class="list-circle"></i><h6>4nd Floor</h6><p>Campaign F</p></li> <li><i class="list-circle"></i><h6>5nd Floor</h6><p>Campaign F</p></li> <li><h6></h6><p></p></li> <li><h6></h6><p></p></li> </ul> <div class="fix-circle"> <div class="floor-camp-info"> <div class="dropdown"><span>All Campaigns</span><i></i> <ul class="drop-option"> <li><a href="javascript:void(0);">Top Campaigns</a></li> <li><a href="javascript:void(0);">Gold Customers</a></li> <li><a href="javascript:void(0);">Ending Soon</a></li> </ul> </div> <div class="day"><i></i><span>Ended 14 days ago</span></div> <ul class="floor-user"> <li><h3 data-connectedUsers="">112</h3><p>Connected Users</p></li> <li><h3 data-probingUsers="">75</h3><p>Probing Users</p></li> </ul> </div> <div class="floor-info"> <div class="spacer85"></div> <button class="white-btn create-campaign-button">Create Campaign</button> <p>15 Visited just now</p> </div> </div> <ul class="user-connection"> <li><i></i><span>Connected Users</span></li> <li><i class="blue-icon"></i><span>Probing Users</span></li> </ul> </div> </div>';
               }
           
           $apva = $template;
           setTimeout(function(){ 
              
           $(".temp").after($apva);
        
            if($(event.target).hasClass("user")){
            }else if($(event.target).hasClass("combined")){
                $('.users-container').each(function(){
                    $(this).highcharts(optns);
                });//initialize graph
            }else if($(event.target).hasClass("combined2")){
                $('.campGraph').each(function(){
                    $(this).highcharts(campGraphOpt);
                });//initialize graph
            }
            else if($(event.target).hasClass("allCamp")){
                $('.campaign-views').each(function(){
                    $(this).highcharts(optionscampViews);
                });//initialize graph
                $(".all-campaigns, .customer-stat, .loc-section,.loc-section, .last-scene, .location-section").getNiceScroll().remove();
                $(".all-campaigns, .customer-stat, .loc-section,.loc-section, .last-scene, .location-section").niceScroll({
                    cursorcolor: "#d9d9d9"
                 });
            }else if($(event.target).hasClass("path")){
                var owl = $(".floor-detail");
                    owl.owlCarousel({
                        autoWidth:false,
                        mouseDrag:false,
                        items: 5,
                        startPosition:3,
                        callbacks:true,
                        navSpeed: 490

                    });
                    
                 $(".dynamic .list-circle:eq(3)").closest(".owl-item").addClass("current-item"); 
                 $(".dynamic").removeClass("dynamic");
                    /*-initialize circle-*/
   

                        var s = $(".circle").length;
	  var circle = Circles.create({
					id:         "circles-"+s,
					value:      43,
					radius:     150,
					width:      15,
					colors:     ['#46627D', '#5EB9E1'],
					text: null
				});
            }
           //regresh nice scrolls
               $(".all-campaigns, .customer-stat, .loc-section,.loc-section, .last-scene, .location-section").getNiceScroll().remove();
               $(".all-campaigns, .customer-stat, .loc-section,.loc-section, .last-scene, .location-section").niceScroll({
                    cursorcolor: "#d9d9d9"
                 });
                 
               
           $(".temp").remove(); 
        }, 500);
           
           
        }
    });


 $('.users-container').highcharts(optns);//call chart for the default widget

/*----users-container chart (end)----*/

/*----circle chart (start)----*/


		 var s = $(".circle:eq(0)").length;
				Circles.create({
					id:         "circles-"+s,
					value:      43,
					radius:     150,
					width:      15,
					colors:     ['#46627D', '#5EB9E1'],
					text: null
				});

//		window.onresize = function(e) {
//
//				circle.update(true);
//
//		};




/*----circle chart (end)----*/

/*custom search*/

 /*  $("[data-search='1']").on("keyup", function() {
 
var g = $(this).val();


$("[data-search='1']").each( function() {
var s = $(this).text();


if (s.indexOf(g)!=-1) {
	$(this).closest(".user-type").show();
}
else {
	$(this).closest(".user-type").hide();
}


});


});​ */ 

$(document).on("keyup","[data-search]",function(){
var ind = $(this).attr("data-search");
var g   = $(this).val();

$("[data-items='"+ind+"']").each( function() {
var s = $(this).text();


if (s.toLowerCase().indexOf(g.toLowerCase())!=-1) {
	$(this).closest("[item-container]").show();
}
else {
	$(this).closest("[item-container]").hide();
}


});


});


$(".widget-gp-list, .widget-list").niceScroll({
    cursorcolor: "#d9d9d9",
    horizrailenabled: false
});



$(".go").on("click",function(){
$(this).closest("#create-campaign-popup").hide();
$(".overlay").fadeOut();
});


/*--range slider--*/

$(".slider").slider();

		
});
