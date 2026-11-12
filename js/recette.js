function showMessage(message, type) {
    const newDiv = document.createElement("div");

    newDiv.textContent = message;
    newDiv.classList.add(type);

    const chatBox = document.getElementById("liste-recettes");
  
    chatBox.appendChild(newDiv);
}

    
function submit_recette(recettes) {
    document.getElementById("liste-recettes").innerHTML = "";
    var sauce = document.querySelectorAll('input[name="sauce"]:checked');
    var base = document.querySelector('input[name="base"]:checked');
    var proteines =document.querySelector('input[name="proteines"]:checked');
    var ingredients_sup = document.querySelectorAll('input[name="ingredients"]:checked')

    const sauces = Array.from(sauce).map(element => element.value);
    const proteine = proteines?.value;
    const ingredients = Array.from(ingredients_sup).map(element => element.value);
    const base_value = base?.value;

    if (!base_value || sauces.length === 0 || !proteine) {
        showMessage("Veuillez sélectionner une base, une sauce et une protéine.", "bot");
        return;
    }

    let recette_trouvee = [];
  
    for (const recette of recettes) {

        if (
            recette.base.toLowerCase() === base_value.toLowerCase() &&
            sauces.some(s => s.toLowerCase() === recette.sauce.toLowerCase()) &&
            recette.proteine.toLowerCase() === proteine.toLowerCase()
        ) {
           
            let correspondance = ingredients.filter(ingredient =>
                recette.ingredients_supplementaires.some(
                    element => element.toLowerCase() === ingredient.toLowerCase()
                )
            ).length;

            recette_trouvee.push({
                ...recette,
                correspondance: correspondance
            });
        }
    }
    
    recette_trouvee.sort((a, b) => b.correspondance - a.correspondance);

    if (recette_trouvee.length > 0) {

        showMessage("Voici les recettes que j'ai trouvées :", "bot");

        for (const recette of recette_trouvee) {
            showMessage(recette.nom_recette, "bot");
            showMessage(recette.preparation, "bot");
        }

    } else {
        showMessage("Désolé, aucune recette ne correspond à vos choix.", "bot");
    }
}

        function fetchJSON(event, url) {
 
    event.preventDefault();

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            submit_recette(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}