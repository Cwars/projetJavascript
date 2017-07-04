<<<<<<< HEAD
<<<<<<< HEAD
// Tous les id des div nécesaire aux sliders
=======

$(document).ready(function() {
    start();
    mySlider();
});

>>>>>>> origin/master
=======

$(document).ready(function() {
	start();
	mySlider();
});

>>>>>>> parent of ae87af1... End
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

var isRunning = false;

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
<<<<<<< HEAD

<<<<<<< HEAD
// Clone et remove
=======
// Démarrage donne un attribu à toutes les images -> data-id
// Data-id = 0 -> donne une class active
>>>>>>> origin/master
=======
>>>>>>> parent of ae87af1... End
function startclone(obj,id,item){
    obj.children( item ).clone().prependTo(id);
    obj.children( item ).remove();
}
// Clone la dernière image au début et la supprime

function suivant(){
<<<<<<< HEAD
	    left = leftBase-imgWidth;

	    if(isRunning === false) {
            isRunning = true;
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
=======
    left = leftBase-imgWidth;

    if(isRunning === false) {
        isRunning = true;
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
>>>>>>> origin/master

                isRunning = false;
            }
        );
    }
}

function precedent(){
	    left = 0;
    if(isRunning === false) {
        isRunning = true;
        rail.animate({
                left: left
            }, speedSlide, function () {
                // Animation complete.
                $(this).children("li:last").clone().prependTo(railname);
                $(this).children("li:last").remove();
                $(this).css("left", leftBase + 'px');

                var futurAct = $(this).children(".active").prev().attr('data-id');
                $(this).children("[class = active]").removeClass("active");
                $(this).children("[data-id=" + futurAct + "]").addClass("active");

                //Texte animation
                railTexte.children("li:last").clone().prependTo(railnameTexte);
                railTexte.children("li:last").remove();

                var futurActText = railTexte.children(".active").prev().attr('data-id');
                railTexte.children("[class = active]").fadeOut().removeClass("active");
                railTexte.children("[data-id=" + futurActText + "]").addClass("active").fadeIn();

            isRunning = false;
            }
        );
    }
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

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
>>>>>>> parent of ae87af1... End

function play() {
    idloop = setInterval(suivant, speedPlay);
    containerButton.children("#play").hide();
    containerButton.children("#pause").show();
=======
>>>>>>> origin/master
}

    function play() {
        idloop = setInterval(suivant, speedPlay);
        containerButton.children("#play").hide();
        containerButton.children("#pause").show();
    }

<<<<<<< HEAD
<<<<<<< HEAD
// Permet de réccupper le nombre d'images
=======
>>>>>>> parent of ae87af1... End
function count() {
	nbImg = rail.children("li").length;
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
=======
    function pause(){
        clearInterval(idloop);
        containerButton.children("#pause").hide();
        containerButton.children("#play").show();
    }

    function count() {
        nbImg = rail.children("li").length;
>>>>>>> origin/master
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

<<<<<<< HEAD
<<<<<<< HEAD
// Récupère le data-id de la classe active
// Récupère le data-id du boutton enclenché
// Fais la différence et effectue plusieurs fois la fonction suivant ou précendent
=======
>>>>>>> parent of ae87af1... End
function dotsAction(){
	if($(this).attr('class') !== "active"){
	   var dotsActive = rail.children(".active").attr('data-id');
	   var dotsClick = $(this).attr('data-id');
=======
>>>>>>> origin/master

// Puces

    function dotsAction(){
        if($(this).attr('class') !== "active"){
            var dotsActive = rail.children(".active").attr('data-id');
            var dotsClick = $(this).attr('data-id');
            // Prend la data-id de la class active et celui du bouton appuyé
            // Fait la différence
            // Plusieurs fois suivant ou précédent
            var diff = dotsClick - dotsActive;
            if (diff>0){
                for(var i = 0; i< diff; i++){
                    isRunning = false;
                    suivant();
                }
            }else{
                for( i = 0; i> diff; i--){
                    isRunning = false;
                    precedent();
                }
            }
        }
    }

