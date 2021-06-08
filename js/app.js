import {displayModalIngredients} from './tag/tag-display.js';

const resultDeLaRecherche = {
    "recipies": [{
        "id": 1,
        "name" : "Limonade de Coco",
        "servings" : 1,
        "ingredients": [
            {
                "ingredient" : "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient" : "Jus de citron",
                "quantity" : 2
            },
            {
                "ingredient" : "Crème de coco",
                "quantity" : 2,
                "unit" : "cuillères à soupe"
            },
            {
                "ingredient" : "Sucre",
                "quantite" : 30,
                "unit" : "grammes"
            },
            {
                "ingredient": "Glaçons"
            }
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        "appliance": "Blender",
        "ustensils": ["cuillère à Soupe", "verres", "presse citron" ]
    }],
    "ustensils": ["cuillère à Soupe", "verres", "presse citron"],
    "ingredientsx": ["Lait de vache", "Jus de citron","Crème de coco","Sucre", "Glaçons"],
    "appareils": ["Blender","Appareil 2","Appareil 3"],
    "quantity" : ["400", "2", "2", "30", ""],
    "unit" : ["ml", "", "cuillères à soupe", "grammes", ""]
};

//////////// creer Les Trois Listes Select
function creerLesTroisListesSelect(resultDeLaRecherche) {
    creerUneSelectTags('ingredients', resultDeLaRecherche.ingredients);
    creerUneSelectTags('appareils', resultDeLaRecherche.appareils);
    creerUneSelectTags('ustensiles', resultDeLaRecherche.ustensils);
}

function creerUneSelectTags(listeSelectId, tagsValue) {
    let html = '';

    tagsValue.forEach(function (value, index) {
        html += `<li class="research__liste__item" href="#">${value}</li>`;
    });
   
    let listSelect = document.querySelector('.research__liste--' + listeSelectId);
    listSelect.insertAdjacentHTML('beforeend', html);
}

creerLesTroisListesSelect(resultDeLaRecherche);


///// au click d'un tag d'une liste deroulante
document.querySelector('.researchTag').addEventListener('click', function(e){
    var element = e.target;
    console.log('click sur un tag');
});


document.querySelectorAll('.research__liste__item').forEach((element) => {
    element.addEventListener('click', function(e){
        element.classList.add('itemSelected');
        var newDivTag = document.createElement('div');// creer une nouvelle div au clic
        newDivTag.classList.add('research__tagSelected__tag');//ajout d une class a la div
        newDivTag.innerHTML="name tag"+'<i class="far fa-times-circle"></i>';//contenu de la div
        document.querySelector('.research__tagSelected').appendChild(newDivTag)
    });
})


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
