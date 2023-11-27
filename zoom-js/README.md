## Zoom sur l'image JavaScript 

Ce dépôt contient un script JavaScript pour implémenter un effet de zoom sur les images. Il est conçu pour être utilisé avec une structure HTML spécifique, où une image est contenue dans un élément parent avec la classe img-zoom-container. L'effet de zoom est activé lorsqu'on survole l'image.

## Fonctionnalités 

    L'effet de zoom est activé au survol de l'image. 
    Le script crée un élément de lentille ( img-zoom-lens) pour suivre le mouvement du curseur sur l'image. 
    Un élément de résultat ( img-zoom-result) affiche la zone agrandie de l'image. 
    Réagit également aux mouvements tactiles pour les écrans tactiles. 

## Utilisation 

    Intégrez le script JavaScript dans votre code HTML. 
    Assurez-vous que votre structure HTML inclut une classe  img-zoom-container pour le conteneur d'image. 
    Personnalisez les styles CSS fournis pour adapter l'apparence de la lentille et du résultat en fonction de vos besoins. 

## Styles CSS 

    Les styles CSS inclus dans le fichier  styles.css définissent l'apparence de la lentille et du résultat. Vous pouvez personnaliser ces styles en fonction de l'esthétique souhaitée pour votre effet de zoom. 

    N'hésitez pas à contribuer, signaler des problèmes ou suggérer des améliorations ! 

## Exemple d'intégration 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Zoom Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="img-zoom-container">
  <img id="myImageZoomed" src="path/to/your/image.jpg" alt="Zoomable Image">
  <div id="myresult" class="img-zoom-result"></div>
</div>

<script src="image-zoom.js"></script>

</body>
</html>

