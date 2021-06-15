class DomRechercheSecondaire {

    //////////// creer Les Trois Listes Select
    creerLesTroisListesSelect(resultDeLaRecherche) {
        this.creerUneSelectTags('ingredients', resultDeLaRecherche.ingredients);
        this.creerUneSelectTags('appareils', resultDeLaRecherche.appareils);
        this.creerUneSelectTags('ustensiles', resultDeLaRecherche.ustensils);
    }


    creerUneSelectTags(listeSelectId, tagsValue) {
        let html = '';

        tagsValue.forEach(function (value, index) {
            html += `<li class="research__liste__item" href="#">${value}</li>`;
        });

        let listSelect = document.querySelector('.research__liste--' + listeSelectId);
        listSelect.insertAdjacentHTML('beforeend', html);
    }



    //////////// affiche ou masque le contenu des tags
    afficherOuMasquerListe() {
        // affiche ou masque le contenu des tags
        
    }


    //////////// creation des tagsbox au clic dans la liste des tags
    dispatchEvent() {
        document.getElementById('researchTag').addEventListener('click', function (event) {
            const element = event.target;
            //console.dir(element);
            
            // Si je click sur un element LI (ingredient, ustensiles ou materiels)
            if (element.classList.contains('research__liste__item')) {
                const elementValue = element.textContent;

                // Si le tag est déja sélectionné
                if (element.classList.contains('tagSelected')) {
                    element.classList.remove('tagSelected');
                    document.querySelector('[data-tag-selected="' + elementValue + '"]').remove();
                }
                // Si le tag n'est pas sélectionné
                else {
                    element.classList.add('tagSelected');
                    
                    if (element.parentNode.classList.contains('research__liste--ingredients')){
                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend',
                        `<div class="tagsSelectedItem tagsSelectedItem--ingrediends ${elementValue}" data-tag-selected="${elementValue}">${elementValue}<i class="far fa-times-circle closeTag"></i></div>`
                        );
                    }
                    else if (element.parentNode.classList.contains('research__liste--appareils')){
                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend',
                        `<div class="tagsSelectedItem tagsSelectedItem--appareils" data-tag-selected="${elementValue}">${elementValue}<i class="far fa-times-circle closeTag"></i></div>`
                        );
                    }
                    else if (element.parentNode.classList.contains('research__liste--ustensiles')){
                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend',
                        `<div class="tagsSelectedItem tagsSelectedItem--ustensiles" data-tag-selected="${elementValue}">${elementValue}<i class="far fa-times-circle closeTag"></i></div>`
                        );
                    }
                }
            };
        });
    }

    closeTagByX() {
        document.getElementById('tagsSelected').addEventListener('click', function (event) {
            const element = event.target;
            const elementValueX = element.parentNode.textContent;
            if (element.classList.contains('closeTag')) {
                element.parentNode.remove();
                console.log(elementValueX);
                if (element.parentNode.classList.contains(elementValueX)) {
                console.log("hey");
                document.querySelector(elementValueX).classList.remove('tagSelected');
                }
            }
        });  
    }
}

export default DomRechercheSecondaire;