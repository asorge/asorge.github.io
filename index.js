$(document).ready(function() {
	$(".resPage").hide();
	$(".calPage").hide();
	console.log("JS");

	pages();
	
	
});

function pages() {
	$("#cLink").click(function() {
	$("#container").fadeOut(250);
	$(".calPage").fadeIn(500);
});

$("#rLink").click(function() {
	$("#container").fadeOut(250);
	$(".resPage").fadeIn(500);
	console.log("resume");
});



$(".closeCal").click(function() {
	$(".calPage").fadeOut(250);
	$("#container").fadeIn(500);

});

$(".closeRes").click(function() {
	$(".resPage").fadeOut(250);
	$("#container").fadeIn(500);

});

var calendar = $("#calendar");
var width = $("#divBox").width();
var height = $("#divBox").height();
calendar.attr("width", width);
calendar.attr("height", height);
}


	
	