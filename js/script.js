// Tous les id des div nécesaire aux sliders
var containerName = "#slideshow";
var liste = "#slide-for";
var railname = "#rail";
var listeTexte = "#slide-for-text";
var railnameTexte = "#rail-text";
var button ="#button-control";

// Variable permettant de les appeller
var container = $(containerName);
var rail = container.children(liste).children(railname);
var railTexte = container.children(listeTexte).children(railnameTexte);
var containerButton = $(button);

//Tailles des images
var imgWidth = 800;
var leftBase = -Math.abs(imgWidth);

// Tailles des images pour le responsive
$( window ).resize(function() {
    if ($(window).width() < 840) {
        imgWidth = 400;
        leftBase = -Math.abs(imgWidth);
        rail.css( "left", leftBase);
    } else {
        imgWidth = 800;
        leftBase = -Math.abs(imgWidth);
        rail.css( "left", leftBase);
    }
});

//Vitesse des animation suivant et precendent
var speedSlide = 1000;

// Vitesse de l'animation play
var speedPlay = 3000;

//Nb d'images
var nbImg;

//ID Pour pour la fonction pause (arreter le setinterval)
var idloop;

//Booléen pour empêcher les clics répétés
var isRunning = false;

$(document).ready(function() {
	start();
	mySlider();
});

// Fonction pour les différents bouton
function mySlider(){

    containerButton.children("#previous").click(precedent);

    containerButton.children("#next").click(suivant);

    containerButton.children("#play").click(play);

    containerButton.children("#pause").click(pause);

}

// Compte le nb d'images
// Création des puces
// On donne certains parametres aux css
// Cache le bouton "pause"
// Clone la dernière image et derniers texte pour les mettres en 1ere postion + Les supprimer
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

// donne un attibut data-id et donne une classe active à data-id = 0
function startObj(obj,id,item){
    obj.children("li").attr( "data-id", function( arr ) {
        return arr;
    });

    startclone(obj,id,item);

    obj.children("[data-id=0]").addClass( "active" );
}

// Clone et remove
function startclone(obj,id,item){
    obj.children( item ).clone().prependTo(id);
    obj.children( item ).remove();
}

function suivant(){
	    left = leftBase-imgWidth;

	    if(isRunning === false) {
            isRunning = true;
            rail.animate({
                    left: left
                }, speedSlide, function () {
                    // Image animation complete.
                    //clone et remove l'image
                    $(this).children("li:first").clone().appendTo(railname);
                    $(this).children("li:first").remove();
                    //Rétablie left du css a la bonne valeur
                    $(this).css("left", leftBase + 'px');

                    //Déplace la classe active des images
                    var futurAct = $(this).children(".active").next().attr('data-id');
                    $(this).children("[class = active]").removeClass("active");
                    $(this).children("[data-id=" + futurAct + "]").addClass("active");

                    //Texte animation
                    //clone et remove le texte
                    railTexte.children("li:first").clone().appendTo(railnameTexte);
                    railTexte.children("li:first").remove();

                    //Déplace la classe active des textes
                    var futurActText = railTexte.children(".active").next().attr('data-id');
                    railTexte.children("[class = active]").fadeOut().removeClass("active");
                    railTexte.children("[data-id=" + futurActText + "]").addClass("active").fadeIn();

                isRunning = false;
            	}
            );
	    }
}

function precedent() {
    left = 0;
    if (isRunning === false) {
        isRunning = true;
        rail.animate({
                left: left
            }, speedSlide, function () {
                // Animation complete.
                //clone et remove l'image
                $(this).children("li:last").clone().prependTo(railname);
                $(this).children("li:last").remove();
                //Rétablie left du css a la bonne valeur
                $(this).css("left", leftBase + 'px');

                //Déplace la classe active des images
                var futurAct = $(this).children(".active").prev().attr('data-id');
                $(this).children("[class = active]").removeClass("active");
                $(this).children("[data-id=" + futurAct + "]").addClass("active");

                //Texte animation
                //clone et remove le texte
                railTexte.children("li:last").clone().prependTo(railnameTexte);
                railTexte.children("li:last").remove();

                //Déplace la classe active des textes
                var futurActText = railTexte.children(".active").prev().attr('data-id');
                railTexte.children("[class = active]").fadeOut().removeClass("active");
                railTexte.children("[data-id=" + futurActText + "]").addClass("active").fadeIn();

                isRunning = false;
            }
        );
    }
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

// Permet de réccupper le nombre d'images
function count() {
	nbImg = rail.children("li").length;
}

// Fonction ecrit en JS uniquement, permet de créer des puces et donne des attributs/classes
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

// Récupère le data-id de la classe active
// Récupère le data-id du boutton enclenché
// Fais la différence et effectue plusieurs fois la fonction suivant ou précendent
function dotsAction(){
	if($(this).attr('class') !== "active"){
	   var dotsActive = rail.children(".active").attr('data-id');
	   var dotsClick = $(this).attr('data-id');

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


