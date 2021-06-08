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
    "ingredients": [],
    "appareils": []
};
function creerLesTroisListesSelect(resultDeLaRecherche) {
    //creerUneSelectTags('ingredients', resultDeLaRecherche.ingredients);
    creerUneSelectTags('ustensiles', resultDeLaRecherche.ustensils);
    //creerUneSelectTags('appareils', resultDeLaRecherche.appareils);
}

function creerUneSelectTags(listeSelectId, tagsValue) {
    let html = '';

    tagsValue.forEach(function (value, index) {
        html += `<li class="tag">test${value}</li>`;
    });

    let listSelect = document.getElementById("liste-" + listeSelectId);
    listSelect.insertAdjacentHTML('beforeend', html);
/*
    tagsValue.forEach(function (value, index) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(value);
        node.appendChild(textnode);
        document.getElementById("liste-ustensiles").appendChild(node);
    });
*/
}

creerLesTroisListesSelect(resultDeLaRecherche);

///// au click d'un tag d'une liste deroulante
document.getElementById('listTagsContainer').addEventListener('click', function(e){
    var element = e.target;
    console.log('click sur un tag');
});

document.querySelector('listTags').each((element) => {
    element.addEventListener('click', function(e){
        element.addClass('display');
    });
})

afficherLesRecettes(resultDeLaRecherche.recipies);

function afficherLesRecettes(recipies) {
    let html = '';

    recipies.forEach(function (recipie, index) {
        html += `<article class="recipie">
                <h1>${recipie.name}</h1>
                <p>${recipie.description}</p>
            </article>`;
    });

    document.getElementById('recipiesContainer').insertAdjacentHTML('beforeend', html);
}