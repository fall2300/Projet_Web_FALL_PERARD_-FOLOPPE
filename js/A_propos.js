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

// Récupération des cartes de l'équipe
const cartes = document.querySelectorAll(".boites > div");

// Récupération du message de présentation
const messageEquipe = document.getElementById("messageEquipe");

// Détecte quand chaque carte est cliquée
cartes.forEach(function(carte) {

    carte.addEventListener("click", function() {

        cartes.forEach(function(element) {
            element.classList.remove("carteActive");
        });

        carte.classList.add("carteActive");

        let nom = carte.querySelector("h3").textContent;

        messageEquipe.textContent = "Vous avez sélectionné : " + nom;

    });

});

const descriptions = [
    "Fall Samba : Samba a travaillé sur la page Recettes, qui permet aux utilisateurs de découvrir différentes idées de plats et de trouver de l'inspiration pour leurs repas.",
    "Perard Antoine : Antoine a participé à la conception de Cook'Easy en réalisant la page d'accueil et la page À propos. Il s'est notamment chargé de présenter le projet et les membres de l'équipe.",
    "Foloppe Lucie : Lucie a réalisé les pages Autres solutions et Conseils, afin de proposer aux utilisateurs des alternatives et des recommandations pour les accompagner dans leur expérience sur Cook'Easy."
];
cartes.forEach(function(carte, index) {
    carte.addEventListener("click", function() {
        messageEquipe.textContent = descriptions[index];
    });
});





