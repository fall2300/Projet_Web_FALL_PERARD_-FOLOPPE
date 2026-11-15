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



