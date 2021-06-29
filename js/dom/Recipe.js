class Recipe {
    
    ///////////// Afficher les recettes /////////////
    static afficherRecettes(result) {
        let html = '';
        result.forEach(recipe => {
            
            // Construction des LI d'une recette
            let htmlIngredient = '';
            recipe.ingredients.forEach(ingredient => {
                //affiche unité si renseignée
                let unit = '';
                if (ingredient.unit != undefined) {
                    unit = ingredient.unit;
                }
                //affiche quantité si renseignée
                let quantity = '';
                if (ingredient.quantity != undefined) {
                    quantity = ":" + " " + ingredient.quantity;
                }
                htmlIngredient += `<li data-quantity="${ingredient.quantity}" data-unit="${ingredient.unit}"><strong>${ingredient.ingredient}</strong> ${quantity} ${unit}</li>`;
            });
            //definition du html d'une recettes
            html +=  `<article class="menu" id=${result.id}>
            <a href="">
                <img src="public/img/imgMenu1.jpg" alt="photo menu ${recipe.name}" class="menu__img">
                <div class="menu__container">
                <div class="menu__zone-text-upper">
                    <h3 class="menu__zone-text-upper__title">${recipe.name}</h3>
                    <div class="menu__zone-text-upper__time">
                        <i class="far fa-clock menu__zone-text-upper__time__ico"></i>
                        <p class="menu__zone-text-upper__time__text">${recipe.time}min</p>
                    </div>
                </div>
                    <div class="menu__zone-text-bottom">
                        <ul class="menu__zone-text-bottom__ingredients">${htmlIngredient}</ul>
                        <p class="menu__zone-text-bottom__recipe">${recipe.description}</p>
                    </div>
                </div>
            </a>
            </article>`;
            //insertion du html
        });
        document.getElementById('menus').insertAdjacentHTML('beforeend', html);
    }
}

export default Recipe;