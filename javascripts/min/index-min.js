$(document).ready(function(){$(".resPage").hide(),$(".projPage").hide(),$(".calPage").hide(),$(".staymindful").hide()}),$(".transitionProj").click(function(){$(".divBox").fadeOut(250),$(".projPage").fadeIn(500);var i=$("#gallery").portfolio();i.init()}),$(".transitionCal").click(function(){$(".divBox").fadeOut(250),$(".calPage").fadeIn(500)}),$(".transitionRes").click(function(){$(".divBox").fadeOut(250),$(".resPage").fadeIn(500)}),$(".closeProj").click(function(){$(".projPage").fadeOut(250),$(".divBox").fadeIn(500)}),$(".closeCal").click(function(){$(".calPage").fadeOut(250),$(".divBox").fadeIn(500)}),$(".closeRes").click(function(){$(".resPage").fadeOut(250),$(".divBox").fadeIn(500)}),$("#staymindful").click(function(){$(".staymindful").fadeIn(250)}),$(".closeMind").click(function(){$(".staymindful").fadeOut(250)}),$("#112").click(function(){$(".112").fadeIn(250)}),$(".close112").click(function(){$(".112").fadeOut(250)});var calendar=$("#calendar"),width=$("#divBox").width(),height=$("#divBox").height();calendar.attr("width",width),calendar.attr("height",height);