<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Description de la page</title>
    <meta name ="description" content="descritption de la page">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div id="slideshow">
        <ul id="slide-for">
            <div id="rail">
                <?php 
                $json = file_get_contents("https://www.skrzypczyk.fr/slideshow.php");
                $parsed_json = json_decode($json);

                    foreach ($parsed_json as $id => $obj) {
                        echo "<li>";
                        echo "<img src='".$obj->{'url'}."' alt='".$obj->{'desc'}."'>";
                        echo "</li>";
                    }
                ?>
            </div>
        </ul>
</div>

<button id="previous">Précédent</button>
<button id="play">lecture/Pause</button>
<button id="next">Suivant</button>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>