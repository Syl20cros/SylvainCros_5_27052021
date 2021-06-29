class DomRechercheSecondaire {

    //////////// creer Les Trois Listes Select
    /*
    creerLesTroisListesSelect(resultDeLaRecherche) {
        this.creerUneSelectTags('ingredients', resultDeLaRecherche.ingredients);
        this.creerUneSelectTags('appareils', resultDeLaRecherche.appareils);
        this.creerUneSelectTags('ustensiles', resultDeLaRecherche.ustensils);
    }


    creerUneSelectTags(listeSelectId, tagsValue) {
        let html = '';
        tagsValue.forEach(function (value, index) {
            html += `<li  data-tag-type="${listeSelectId}" data-tag-value="${value}" class="research__liste__item" href="#">${value}</li>`;
        });

        let listSelect = document.querySelector('.research__liste--' + listeSelectId);
        listSelect.insertAdjacentHTML('beforeend', html);
    }
    */

   //rempli la liste complète des ingredients à partir des recettes du résultat de recherche
   static buildFilter(searchParams, searchResult, parentList, category) {

    const filterList = [...document.getElementById(parentList).children]
    filterList.forEach(element => {
        if (element.classList.contains('tagSelected') !== true) {
            element.remove()
        }    
    });

    let html = '';
    searchResult.forEach(elmt => {
        if (searchParams.has(elmt) == false) {
            html += `<li  data-tag-type="${category}" data-tag-value="${elmt}" class="research__liste__item" href="#">${elmt}</li>`;
        }
    });

    let listSelect = document.getElementById(parentList);
    listSelect.insertAdjacentHTML('beforeend',html);
}



    //////////// affiche ou masque le contenu des tags
    static openCloseTagList() {
        const btns = document.getElementsByClassName('research__tag');
        for (let btn of btns) {
            btn.addEventListener('click',function() {
                let elementToTogle = btn.dataset.type;
                if (document.getElementById(elementToTogle).classList.contains('modalTag-show')) {
                    document.getElementById(elementToTogle).classList.remove('modalTag-show');
                    btn.classList.remove('research__tag--bigger');
                } else {
                    document.getElementById(elementToTogle).classList.add('modalTag-show')
                    btn.classList.add('research__tag--bigger');
                }
            });
        }
    }


    //////////// creation des tagsbox au clic dans la liste des tags
    dispatchEvent() {
        document.getElementById('researchTag').addEventListener('click', function (event) {
            const element = event.target;
            //console.dir(element);

            // Si je click sur un element LI (ingredient, ustensiles ou materiels)
            if (element.classList.contains('research__liste__item')) {
                const elementValue = element.textContent;
                const elementType = element.dataset.tagType;
                // Si le tag est déja sélectionné
                if (element.classList.contains('tagSelected')) {
                    element.classList.remove('tagSelected'); 
                    document.querySelector('[data-tag-selected="' + elementValue + '"]').closest('div').remove();
                }
                // Si le tag n'est pas sélectionné
                else {
                    element.classList.add('tagSelected');
                    document.getElementById('tagsSelected').insertAdjacentHTML('beforeend',
                        `<div class="tagsSelectedItem tagsSelectedItem--${elementType}">${elementValue}
                        <i class="far fa-times-circle closeTag" data-tag-selected="${elementValue}"></i>
                        </div>`);
                }
            };
        });
    }

    //////////// Actions au clic sur X des boites des tag
    closeTagByX() {
        document.getElementById('tagsSelected').addEventListener('click', function (event) {
            const element = event.target;
           
            if (element.classList.contains('closeTag')) {
                element.closest('div').remove();
                const tagValue = element.dataset.tagSelected;
                document.querySelector('[data-tag-value="'+ tagValue + '"]').classList.remove('tagSelected');
            }
        });  
    }
}

export default DomRechercheSecondaire;