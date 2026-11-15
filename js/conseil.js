
const formulaire = document.getElementById("formulaireID");
const questions = document.getElementById("questions");
const informationMessage = document.getElementById("information-message");
const recipesSection = document.getElementById("recettes");
const resultMessage = document.getElementById("resultat-message");

document.getElementById("start-quiz").addEventListener("click", function () {
    questions.hidden = false;
    informationMessage.textContent = "";
});

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const diet = normalize(document.getElementById("regime").value);
    const budget = formulaire.querySelector('input[name="budget"]:checked');
    const selections = Array.from(
        formulaire.querySelectorAll('input[name="recherche"]:checked')
    ).map(function (input) {
        return input.value;
    });

    if (!diet || !budget || selections.length === 0) {
        informationMessage.textContent =
            "Choisissez votre régime, votre budget et au moins un critère de recherche.";
        recipesSection.hidden = true;
        return;
    }

    informationMessage.textContent = "";

    const mealTypes = selections.filter(function (choice) {
        return choice === "sale" || choice === "sucre";
    });
    const difficultyChoices = selections.filter(function (choice) {
        return choice === "facile" || choice === "rapide";
    });
    const recipes = Array.from(document.querySelectorAll("#liste-recettes .recette"));
    let visibleCount = 0;

    recipes.forEach(function (recipe) {
        const recipeDiet = normalize(recipe.getAttribute("regime"));
        const recipeType = normalize(recipe.getAttribute("type"));
        const situation = normalize(recipe.getAttribute("situation"));
        const matchesDiet =
            diet === "tous" ||
            recipeDiet === diet ||
            (diet === "vegetarien" && recipeDiet === "vegan");
        const matchesType =
            mealTypes.length === 0 || mealTypes.includes(recipeType);
        const matchesDifficulty = difficultyChoices.every(function (choice) {
            return situation.includes(choice);
        });
        const matches = matchesDiet && matchesType && matchesDifficulty;

        recipe.hidden = !matches;
        if (matches) {
            visibleCount += 1;
        }
    });

    resultMessage.textContent = visibleCount
        ? visibleCount + " recette(s) correspondent à vos critères."
        : "Aucune recette ne correspond à tous vos critères. Essayez d'en modifier un.";
    recipesSection.hidden = false;
});

function normalize(value) {
    return (value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}