var key = "AIzaSyAsgwLCvL6BYc8F0SzZkHfGjDhAh68GYAE";



$(".mapLink").click(function() {

	$(".googlemaps").fadeIn();

});

$(".spanMap").click(function() {
	$(".googlemaps").fadeOut();
});

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Visitors by University since January 2014'
        },
        subtitle: {
            text: 'Source: phippsconservatory.org'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yAxis: {
            title: {
                text: 'People'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'CMU',
            data: [17.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
            name: 'Pitt',
            data: [7.0, 6.9, 9.5, 4.5, 8.4, 21.5, 5.2, 26.5, 23.3, 18.3, 1, 9]
        },
        {
            name: 'Duquesne',
            data: [7.0, 6, 5, 1.5, 18.4, 21.5, 2.2, 16.5, 2.3, 8.3, 13.9, 9.6]
        }]
    });
});


var map = $(".googlemaps");
var mapWidth = map.width();
var mapHeight = map.height();

var mapFrame = $("#mapFrame");
mapFrame.attr("width", mapWidth);
mapFrame.attr("height", mapHeight);

$(document).ready(function() {

	$(".spanMap").addClass("tossing");
	$(".spanStud").addClass("tossing");

});





