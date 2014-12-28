$(document).ready(function() {
	$(".resPage").hide();
	$(".projPage").hide();
	$(".calPage").hide();
	$(".staymindful").hide();
	
	
});

$(".pLink").click(function() {

	$(".centerContent").fadeOut(250);
	$(".projPage").fadeIn(500);

});

$("#cLink").click(function() {
	$(".centerContent").fadeOut(250);
	$(".calPage").fadeIn(500);
});

$("#rLink").click(function() {
	$(".centerContent").fadeOut(250);
	$(".resPage").fadeIn(500);
});



$(".closeProj").click(function() {
	$(".projPage").fadeOut(250);
	$(".centerContent").fadeIn(500);

});

$(".closeCal").click(function() {
	$(".calPage").fadeOut(250);
	$(".centerContent").fadeIn(500);

});

$(".closeRes").click(function() {
	$(".resPage").fadeOut(250);
	$(".centerContent").fadeIn(500);

});


// $("#staymindful").click(function() {
// 	$(".staymindful").fadeIn(250);
// });

// $(".closeMind").click(function() {
// 	$(".staymindful").fadeOut(250);
// });

// $("#112").click(function () {

// 	$(".112").fadeIn(250);
// });

// $(".close112").click(function() {
// 	$(".112").fadeOut(250);
// });


var calendar = $("#calendar");
var width = $("#divBox").width();
var height = $("#divBox").height();
calendar.attr("width", width);
calendar.attr("height", height);
	
	