// Import du menu liste deroulante tag
import {displayModalAppareils} from './tag/tag-display.js';

// Import du fake resultat de recherche
import resultDeLaRecherche from './data/Fixture.js';

// Import de la classe qui construit les 3 selects (tags ingrédients, ustensiles, appareils)
import selectDomBuilder from './dom/Select.js';

// Import de la classe qui construit la liste des recettes
import recipieDomBuilder from './dom/Recipie.js';


/********************** liste deroulante ************************************/
const domSelectBuilder = new selectDomBuilder();

// au click d'un tag sa l'ajoute a la liste des tags selectionnés ou le retire
domSelectBuilder.dispatchEvent();

// affiche les trois listes deroulantes
domSelectBuilder.creerLesTroisListesSelect(resultDeLaRecherche);

// Ferme un tag au clicsur X
domSelectBuilder.closeTagByX();


/********************** Affichage recette ***********************************/
const domRecipieBuilder = new recipieDomBuilder();

// Afficher les blocs recette
domRecipieBuilder.afficherLesBlocsRecettes(resultDeLaRecherche.recipies);

// Remplissage des blocs recette
domRecipieBuilder.afficherContenuRecettes(resultDeLaRecherche.recipies);



/*
///// au click d'un tag d'une liste deroulante
document.querySelectorAll('.research__liste__item').forEach((element) => {
    element.addEventListener('click', function(e){
        element.classList.add('itemSelected');
        var newDivTag = document.createElement('div');// creer une nouvelle div au clic
        newDivTag.classList.add('research__tagSelected__tag');//ajout d une class a la div
        newDivTag.innerHTML= element.name+'<i class="far fa-times-circle"></i>';//contenu de la div
        document.querySelector('.research__tagSelected').appendChild(newDivTag);
        console.log(element);
    });
})
*/

/*
///// Afficher les recettes
afficherLesRecettes(resultDeLaRecherche.recipies);

function afficherLesRecettes(recipies) {
    let html = '';
    recipies.forEach(function (recipie, index) {
        //console.log(recipie);
        html += `<div class="menu__zone-text-upper">
        <h3 class="menu__zone-text-upper__title">${recipie.name}</h3>
        <div class="menu__zone-text-upper__time">
            <i class="far fa-clock menu__zone-text-upper__time__ico"></i>
            <p class="menu__zone-text-upper__time__text">${recipie.time}min</p>
        </div>
    </div>
    <div class="menu__zone-text-bottom">
        <ul class="menu__zone-text-bottom__ingredients">
        </ul>
        <p class="menu__zone-text-bottom__recipe">${recipie.description}</p>
    </div>`;
    });
    document.querySelector('.menu__container').insertAdjacentHTML('beforeend', html);
}


ListeIngredientsRecettes(resultDeLaRecherche.ingredients);

function ListeIngredientsRecettes(ingredients) {
    let html = '';
    ingredients.forEach(function (ingredient, index) {
        console.log(ingredient);
        html += `<li><strong>${ingredient}:</strong> ${ingredient.quantity}${ingredient.unit}</li>`;
    });
    document.querySelector('.menu__zone-text-bottom__ingredients').insertAdjacentHTML('beforeend', html);
}
*/