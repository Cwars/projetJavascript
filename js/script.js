// Give an id to every img in the slideshow>Rail class
$(document).ready(function() {
	start();
	mySlider();
});

var containerName = "#slideshow";
var liste = "#slide-for";
var railname = "#rail";
var container = $(containerName);
var rail = container.children(liste).children(railname);

var listeTexte = "#slide-for-text";
var railnameTexte = "#rail-text";
var railTexte = container.children(listeTexte).children(railnameTexte);

var dot = "#button-dots";
var containerDots = $(dot);

var button ="#button-control";
var containerButton = $(button);

var imgWidth = 800;
var leftBase = -Math.abs(imgWidth);
var speedSlide = 1000;
var speedPlay = 3000;

var nbImg;
var idloop;

var isStop = true;

function mySlider(){

    containerButton.children("#previous").click(precedent);

    containerButton.children("#next").click(suivant);

    containerButton.children("#play").click(play);

    containerButton.children("#pause").click(pause);

}

function start(){
    count();
    createButtonDots();

    rail.css( "left", leftBase);
    railTexte.children("li:not(:first)").hide();

    var sliderWidth = imgWidth * nbImg;
    rail.css( "width", sliderWidth);

    containerButton.children("#pause").hide();

    startObj(rail,railname,"li:last");
    startObj(railTexte,railnameTexte,"li:last");

}
function startObj(obj,id,item){
    obj.children("li").attr( "data-id", function( arr ) {
        return arr;
    });

    startclone(obj,id,item);

    obj.children("[data-id=0]").addClass( "active" );
}

function startclone(obj,id,item){
    obj.children( item ).clone().prependTo(id);
    obj.children( item ).remove();
}

function suivant(){
	    left = leftBase-imgWidth;

	    if(isStop === true) {
            isStop = false;
            rail.animate({
                    left: left
                }, speedSlide, function () {
                    // Image animation complete.
                    $(this).children("li:first").clone().appendTo(railname);
                    $(this).children("li:first").remove();
                    $(this).css("left", leftBase + 'px');

                    var futurAct = $(this).children(".active").next().attr('data-id');
                    $(this).children("[class = active]").removeClass("active");
                    $(this).children("[data-id=" + futurAct + "]").addClass("active");

                    //Texte animation
                    railTexte.children("li:first").clone().appendTo(railnameTexte);
                    railTexte.children("li:first").remove();

                    var futurActText = railTexte.children(".active").next().attr('data-id');
                    railTexte.children("[class = active]").fadeOut().removeClass("active");
                    railTexte.children("[data-id=" + futurActText + "]").addClass("active").fadeIn();

                isStop = true;
            	}
            );
	    }
}

function precedent(){
	    left = 0;
	    rail.animate({
			left: left
			}, speedSlide, function() {
			// Animation complete.
				$(this).children( "li:last" ).clone().prependTo( railname );
			    $(this).children( "li:last" ).remove();
			    $(this).css( "left", leftBase+'px');

				var futurAct = $(this).children(".active").prev().attr('data-id');
				$(this).children("[class = active]").removeClass("active");
				$(this).children("[data-id="+futurAct+"]").addClass( "active" );

				//Texte animation
				railTexte.children("li:last").clone().prependTo(railnameTexte);
				railTexte.children("li:last").remove();

				var futurActText = railTexte.children(".active").prev().attr('data-id');
				railTexte.children("[class = active]").fadeOut().removeClass("active");
				railTexte.children("[data-id=" + futurActText + "]").addClass("active").fadeIn();
			}
		);
    /*railTexte.animate(
        speedSlide, function() {
            //Texte animation
            $(this).children("li:last").clone().prependTo(railnameTexte);
            $(this).children("li:last").remove();

            var futurActText = $(this).children(".active").prev().attr('data-id');
            $(this).children("[class = active]").hide().removeClass("active");
            $(this).children("[data-id=" + futurActText + "]").addClass("active").show();
        });*/

	}

function play() {
    idloop = setInterval(suivant, speedPlay);
    containerButton.children("#play").hide();
    containerButton.children("#pause").show();
}

function pause(){
    clearInterval(idloop);
    containerButton.children("#pause").hide();
    containerButton.children("#play").show();
}

function count() {
	nbImg = rail.children( "li" ).length;
}

function createButtonDots() {
    var div = document.createElement("div");
    div.setAttribute("id", "button-dots");

	for(i=0 ; i<nbImg ; i++){
        var button = document.createElement("button");
        button.setAttribute( "data-id", i);
        button.setAttribute("id", "dots");
		var button_content = document.createTextNode(i);
		button.appendChild(button_content);
        div.appendChild(button);
        button.onclick = dotsAction;
    }
	var div2 = document.getElementById("button-control");
	var parentDiv = div2.parentNode;

	parentDiv.insertBefore(div, div2);
}

function dotsAction(){
	if($(this).attr('class') !== "active"){
	   var dotsActive = rail.children(".active").attr('data-id');
	   var dotsClick = $(this).attr('data-id');

	   var diff = dotsClick - dotsActive;
	   if (diff>0){
			for(var i = 0; i< diff; i++){
				suivant();
			}
	   }else{
           for( i = 0; i> diff; i--){
           		precedent();
           }
	   }
    }
}


