$( document ).ready(function() {
    if (typeof jQuery == 'undefined') {

    alert("Your book is overdue.");

    }
    else{
      //  alert("we good");

    }
    var body = $("html, body");
    var one = $("#one");
    var two = $("#two");
    var three = $("#three");
    var four = $("#four");
    var container = $("#container1");
    var tall = "44em";

    //$("#missionWindow").attr("display", "none");

    $.fn.scrollView = function () {
      return this.each(function () {
       body.animate({
          scrollTop: $(this).offset().top-100
        }, 1000);
      });
    }

    $("#about").click(
        function(){
          four.scrollView();
        });     
   
    $("#stores").click(
        function(){
           three.scrollView();
        });

    $("#shoes").click(
        function(){
            two.scrollView();
        });

    $("#mission").click(
        function(){
            one.scrollView();
        });

    // handle pop up window events

    $("#popUp").click( function() {
        $("#missionWindow").fadeIn();
    });

    $(".closeWindow").click( function() {
        $("#missionWindow").fadeOut();
    });

    $(".feedback").click(function() {
        $("#feedback").fadeIn();
    });

    $("#closeButton").click(function() {
        $("#feedback").fadeOut();
    });

    $(".closeForm").click(function() {
        $("div#feedback").fadeOut();
    });
    // size map to fit specific div

    var map = $(".content");
    var mapWidth = map.width();
    var mapHeight = map.height();

    var mapFrame = $("#mapFrame");
    mapFrame.attr("width", 1000);
    mapFrame.attr("height", mapHeight);

    // shoe image carosuel

     var angle = 0;
     function galleryspin(sign) { 
        spinner = document.querySelector("#spinner");
        if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
        spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    }

    $("#forwardSpin").click(function() {
        galleryspin();
    });

    $("#backSpin").click(function() {
        galleryspin("-");
    });

    // switch image caption

    $("#go").click(function() {
        alert("Thanks for subscribing!");
    });


});
