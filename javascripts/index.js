$(document).ready(function() {
	$(".resPage").hide();
	$(".projPage").hide();
	$(".calPage").hide();
	
	
});

$(".transitionProj").click(function() {

	$(".divBox").fadeOut(250);
	$(".projPage").fadeIn(500);

});

$(".transitionCal").click(function() {
	$(".divBox").fadeOut(250);
	$(".calPage").fadeIn(500);
});

$(".transitionRes").click(function() {
	$(".divBox").fadeOut(250);
	$(".resPage").fadeIn(500);
});



$(".closeProj").click(function() {
	$(".projPage").fadeOut(250);
	$(".divBox").fadeIn(500);

});

$(".closeCal").click(function() {
	$(".calPage").fadeOut(250);
	$(".divBox").fadeIn(500);

});

$(".closeRes").click(function() {
	$(".resPage").fadeOut(250);
	$(".divBox").fadeIn(500);

});


	
	