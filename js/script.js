// Give an id to every img in the slideshow>Rail class
$(document).ready(function() {

	start();
	createDots();
	mySlider();
	// $( "#slideshow img" ).attr( "id", function( arr ) {
	// 	return arr;
	// });

});

var containerName = "#slideshow";
var liste = "#slide-for";
var railname = "#rail";

var container = $(containerName);
var rail = container.children(liste).children(railname);
var imgWidth = 800;
var leftBase = -Math.abs(imgWidth);
var speed = 1000;

var nbImg;


function mySlider(){

	count();

	container.siblings("button:first").click(precedent);

	container.siblings("button:last").click(suivant);

	container.siblings("button").eq(1).click(function () {
	    rail.children( "img" ).toggle();
	});

}

function suivant(){
	    left = leftBase-imgWidth;
	    rail.animate({
			left: left,
			}, speed, function() {
			// Animation complete.
				$(this).children( "li:first" ).clone().appendTo( railname );
			    $(this).children( "li:first" ).remove();
			    $(this).css( "left", leftBase+'px');
			}
		);
	}

function precedent(){
	    left = 0;
	    rail.animate({
			left: left,
			}, speed, function() {
			// Animation complete.
				$(this).children( "li:last" ).clone().prependTo( railname );
			    $(this).children( "li:last" ).remove();
			    $(this).css( "left", leftBase+'px');
			}
		);
	}

function start(){
	count();
	rail.children( "li:last" ).clone().prependTo( railname );
	rail.children( "li:last" ).remove();

	rail.css( "left", leftBase);

	var sliderWidth = imgWidth * nbImg;
	rail.css( "width", sliderWidth);

}

function count() {
	nbImg = rail.children( "li" ).length;
}

function createDots() {
	var ul = document.createElement("ul");
	ul.setAttribute("id", "slide-nav");

	for(i=0 ; i<nbImg ; i++){
	var li = document.createElement("li");
        if(i==0){
            li.setAttribute("id", "active");
        }
	li.setAttribute("class", "slide");
	var li_content = document.createTextNode(i);
	li.appendChild(li_content);
	ul.appendChild(li);
	}
	var div2 = document.getElementById("previous");
	var parentDiv = div2.parentNode;

	parentDiv.insertBefore(ul, div2);
}


