$(document).ready(function() {
	$("#CA").hide();
	$("#WA").hide();
	$("#SD").hide();
	init();
});

function init() {


	  $('#map').usmap({
	  	  'stateStyles': {
		      fill: '#777', 
		      "stroke-width": 1,
		      'stroke' : '#036'
	    	},
	    	'stateSpecificStyles': {
	    		'CA': {
	    			'stroke': '#F72828'
	    		},
	    		'WA': {
	    			'stroke': '#F72828'
	    		},
	    		'SD': {
	    			'stroke': '#F72828'
	    		}
	    	},
	    
	    
	    'click' : function(event, data) {
	    	switch (data.name) {
	    		case 'CA':
	    			$("#CA").fadeIn(500);
	    			break;
	    		case 'SD':
	    			$("#SD").fadeIn(500);
	    			break;
	    		case 'WA':
	    			$("#WA").fadeIn(500);
	    			break;

	    	}
	    }
	  });

	  $(".closeCA").click(function() {
	  	$("#CA").fadeOut(350);
	  });
	  $(".closeWA").click(function() {
	  	$("#WA").fadeOut(350);
	  });
	  $(".closeSD").click(function() {
	  	$("#SD").fadeOut(350);
	  });
}

