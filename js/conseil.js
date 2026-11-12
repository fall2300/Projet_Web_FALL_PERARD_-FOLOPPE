
function quizAlert() {
    showQuiz();
}

function showQuiz() {
    document.getElementById("questions").hidden = false;
}


//Les recettes apparaissent une fois que l'utilisateur a choisi son regime alimentaire et rempli le formulaire.
function ShowRecipe(){
    document.getElementById("recettes").hidden = false;
}

function submitQuiz() {
    ShowRecipe();
}