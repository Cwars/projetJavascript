$("button:first").click(precedent);

$("button").eq(1).click(function () {
    $("img").toggle();
});

$("button:last").click(suivant);

function suivant () {
    event.preventDefault();
    $( "#Rail" ).css( "margin-left", "+=600" );
}

function precedent () {
    event.preventDefault();
    $( "#Rail" ).css( "margin-left", "-=600" );
}