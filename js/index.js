// Faire bouger la toque

let toque = document.getElementById("toque");

let inclinee = false;

toque.style.transformOrigin = "bottom center";
toque.style.transition = "transform 0.4s ease-in-out";

setInterval(function() {

    inclinee = !inclinee;

    if (inclinee) {
        toque.style.transform = "rotate(10deg)";
    } else {
        toque.style.transform = "rotate(-10deg)";
    }

}, 400);

// Demander le prénom du visiteur 

let prenom = prompt("Bienvenue ! Quel est votre prénom ?");


// Message de bienvenue personnalisé pour les visiteurs 

let messageBienvenue = document.getElementById("messageBienvenue");

messageBienvenue.textContent = "Bienvenue " + prenom + ", prêt à cuisiner ?";

// Récupération des éléments HTML du diaporama
const imagePlat = document.getElementById("imagePlat");
const precedent = document.getElementById("precedent");
const suivant = document.getElementById("suivant");

// Liste images du diaporama
const images = [
    "img/Plat_1.jpg",
    "img/Plat_2.jpg",
    "img/Plat_3.jpg"
];
// Index de l'image actuellement affichée
let indexImage = 0;

// fonction qui affiche l'image séléctionnée du diaporama
function afficherImage() {
    imagePlat.src = images[indexImage];
}

// Afficher la première image au chargement de la page
afficherImage();
// Passer à l'image suivante
suivant.addEventListener("click", function() {
    indexImage++;

    if (indexImage >= images.length) {
        indexImage = 0;
    }

    afficherImage();
});

// Revenir à l'image précédente
precedent.addEventListener("click", function() {
    indexImage--;

    if (indexImage < 0) {
        indexImage = images.length - 1;
    }

    afficherImage();
});
