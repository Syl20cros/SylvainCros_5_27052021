class Recipie {
   
    ///////////// Remplissage des blocs recette /////////////
    afficherContenuRecettes(e) {
        let html = '';
        e.forEach(recipie => {
            //console.dir(recipie);

            // Construction des LI d'une recette
            let htmlIngredient = '';
            recipie.ingredients.forEach(ingredient => {
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
            html += `<div class="menu__zone-text-upper">
                <h3 class="menu__zone-text-upper__title">${recipie.name}</h3>
                <div class="menu__zone-text-upper__time">
                    <i class="far fa-clock menu__zone-text-upper__time__ico"></i>
                    <p class="menu__zone-text-upper__time__text">${recipie.time}min</p>
                </div>
            </div>
            <div class="menu__zone-text-bottom">
                <ul class="menu__zone-text-bottom__ingredients">
                    ${htmlIngredient}
                </ul>
                <p class="menu__zone-text-bottom__recipe">${recipie.description}</p>
            </div>`;
            document.querySelector('.menu__container').insertAdjacentHTML('beforeend', html);
        });
       //document.querySelector('.menu__container').insertAdjacentHTML('beforeend', html);
    }

    ///////////// Afficher les blocs recette /////////////
    afficherLesBlocsRecettes(e) {
        let html2 = '';
        //console.dir(e);
        e.forEach(function () {
            html2 += `<article class="menu" id=${e.id}>
            <a href="">
                <img src="public/img/imgMenu1.jpg" alt="photo menu 1" class="menu__img">
                <div class="menu__container">
                </div>
            </a>
            </article>`;
        });
        document.getElementById('menus').insertAdjacentHTML('beforeend', html2);
    }
}

export default Recipie;