$( document ).ready(function() {
	if (typeof jQuery == 'undefined') {

    alert("Your book is overdue.");

    }
	else{
		alert("we good");

	}
        $("#missionWindow").attr("display", "none");

	$("#about").click(
        function(){
            $('body').scrollTo($(".fourth"));
            $('html, body').animate({ scrollTop: $('.fourth').offset().top+200}, 'slow');
        });		
   
    $("#stores").click(
        function(){
            $('html, body').animate({ scrollTop: $('.third').offset().top }, 'slow');
        });

    $("#shoes").click(
        function(){
            console.log("wow");
            $('html, body').animate({ scrollTop: $('.second').offset().top}, 'slow');
        });

    $("#mission").click(
        function(){
            $('html, body').animate({ scrollTop: $('.first').offset().top-100}, 'slow');
        });

    $(".popUp").click($("#missionWindow").fadeIn(500));

    $(".closeWindow").click($("#missionWindow").fadeOut(500));

    var map = $(".third");
    var mapWidth = map.width();
    var mapHeight = map.height();

    var mapFrame = $("#mapFrame");
    mapFrame.attr("width", mapWidth);
    mapFrame.attr("height", mapHeight);

});
