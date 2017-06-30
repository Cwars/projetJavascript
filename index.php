<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Slideshow</title>
    <meta name ="Slideshow" content="Slideshow">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=yes" />
</head>
<body>
<h1>Le slider de nos rêves</h1>
<div id="slideshow">
        <ul id="slide-for">
            <div id="rail">
                <?php
                $json = file_get_contents("https://www.skrzypczyk.fr/slideshow.php");
                $parsed_json = json_decode($json);

                    foreach ($parsed_json as $id => $obj) {
                        echo "<li id='slider'>";
                        echo "<img src='".$obj->{'url'}."' alt='".$obj->{'title'}."'>";
                        echo "</li>";
                    }
                ?>
            </div>
        </ul>

        <ul id="slide-for-text">
            <div id="rail-text">
                <?php
                foreach ($parsed_json as $id => $obj) {
                    echo "<li id='sliderTexte'>";
                    echo "<p>".$obj->{'desc'}."<p/>";
                    echo "</li>";
                }
                ?>
            </div>
        </ul>
</div>

<!--<div id="button-dots">
    <button class="active" data-id="0" id="dots">0</button>
    <button data-id="1" id="dots">1</button>
    <button data-id="2" id="dots">2</button>
    <button data-id="3" id="dots">3</button>
</div>-->

<div id="button-control">
    <button id="previous"><i class="fa fa-backward" aria-hidden="true"></i></button>
    <button id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
    <button id="pause"><i class="fa fa-pause" aria-hidden="true"></i></button>
    <button id="next"><i class="fa fa-forward" aria-hidden="true"></i></button>
</div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/script.js"></script>

</body>
</html>