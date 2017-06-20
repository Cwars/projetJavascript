// Give an id to every img in the slideshow>Rail class
$(document).ready(function() {
	$( "#slideshow #Rail img" ).attr( "id", function( arr ) {
		return arr;
	});
	 mySlider();
});

var boxId = "slideshow";
var container = $('#'+boxId);
var leftBase= container.children( "#Rail" ).position().left;

function mySlider(){

	container.siblings("button:first").click(precedent);

	container.siblings("button:last").click(suivant);

	container.children("button").eq(1).click(function () {
	    container.children("img").toggle();
	});

}

function suivant(){
	    left = leftBase-800;
	    container.children( "#Rail" ).animate({
			left: left,
			}, 1000, function() {
			// Animation complete.
				$(this).children( "img:first" ).clone().appendTo( "#Rail" );
			    $(this).children( "img:first" ).remove();
			    $(this).css( "left", leftBase+'px');
			}
		);
	}

function precedent(){
	    left = 0;
	    container.children( "#Rail" ).animate({
			left: left,
			}, 1000, function() {
			// Animation complete.
				$(this).children( "img:last" ).clone().prependTo( "#Rail" );
			    $(this).children( "img:last" ).remove();
			    $(this).css( "left", leftBase+'px');
			}
		);
	}