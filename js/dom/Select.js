class DomRechercheSecondaire {
  //rempli la liste complète des ingredients à partir des recettes du résultat de recherche
  static buildFilter(searchParams, searchResult, parentList, category) {
    let html = "";

    
    searchResult.forEach((elmt) => {
      if (searchParams.has(elmt) == false) {
        html += `<li  data-tag-type="${category}" data-tag-value="${elmt}" class="research__liste__item" href="#">${elmt}</li>`;
      } else {
        html += `<li  data-tag-type="${category}" data-tag-value="${elmt}" class="research__liste__item tagSelected" href="#">${elmt}</li>`;
      }
    });

    let listSelect = document.getElementById(parentList);
    listSelect.innerHTML = html;
  }

//////////// Filtrer la liste de tag en fonction du texte input
    static tagInputFiter(event) {
        const textFilter = event.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        const dropdown = event.target.parentElement.parentElement;
        [...dropdown.getElementsByTagName('li')].forEach((element) => {
            const textValue = element.textContent || element.innerText;
            if (textValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(textFilter) > -1) {
                element.classList.remove('hideToTagList');
            } else {
                element.classList.add('hideToTagList');
            }
        });
}

  //////////// affiche ou masque le contenu des tags
  static openCloseTagList() {
    const btns = document.getElementsByClassName("research__tag");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        let elementToTogle = btn.dataset.type;
        var ico = btn.querySelector(".fa-chevron-down");
        if (
          document
            .getElementById(elementToTogle)
            .classList.contains("modalTag-show")
        ) {
          document
            .getElementById(elementToTogle)
            .classList.remove("modalTag-show");
          btn.classList.remove("research__tag--bigger");
          ico.classList.remove("icoReturnAnim"); //retour icones fleche en position initial
        } else {
          //masque toutes les listes
          let allList = document.querySelectorAll(".research__liste");
          for (var eachList of allList) {
            eachList.classList.remove("modalTag-show");
          }
          //reduction taille de toutes les tag box
          let allTagBox = document.querySelectorAll(".research__tag");
          for (var eachTagBox of allTagBox) {
            eachTagBox.classList.remove("research__tag--bigger");
          }
          //retour de toutes les icones fleche en position initial
          let allIconsReturn = document.querySelectorAll(".icoReturnAnim");
          for (var eachIconsReturn of allIconsReturn) {
            eachIconsReturn.classList.remove("icoReturnAnim");
          }
          //Affiche la liste selectionnée
          document
            .getElementById(elementToTogle)
            .classList.add("modalTag-show");
          btn.classList.add("research__tag--bigger");
          //retourne la fleche vers le haut
          ico.classList.add("icoReturnAnim");
        }
      });
    }
  }

    

  //////////// creation des tagsbox au clic dans la liste des tags
  dispatchEvent() {
    document
      .getElementById("researchTag")
      .addEventListener("click", function (event) {
        const element = event.target;
        //console.dir(element);

        // Si je click sur un element LI (ingredient, ustensiles ou materiels)
        if (element.classList.contains("research__liste__item")) {
          const elementValue = element.textContent;
          const elementType = element.dataset.tagType;
          // Si le tag est déja sélectionné
          if (element.classList.contains("tagSelected")) {
            element.classList.remove("tagSelected");
            document
              .querySelector('[data-tag-selected="' + elementValue + '"]')
              .closest("div")
              .remove();
          }
          // Si le tag n'est pas sélectionné
          else {
            element.classList.add("tagSelected");
            document.getElementById("tagsSelected").insertAdjacentHTML(
              "beforeend",
              `<div class="tagsSelectedItem tagsSelectedItem--${elementType}">${elementValue}
                        <i class="far fa-times-circle closeTag" data-tag-selected="${elementValue}"></i>
                        </div>`
            );
          }
        }
      });
  }

  //////////// Actions au clic sur X des boites des tag
  closeTagByX() {
    document
      .getElementById("tagsSelected")
      .addEventListener("click", function (event) {
        const element = event.target;

        if (element.classList.contains("closeTag")) {
          element.closest("div").remove();
          const tagValue = element.dataset.tagSelected;
          document
            .querySelector('[data-tag-value="' + tagValue + '"]')
            .classList.remove("tagSelected");
        }
      });
  }
}

export default DomRechercheSecondaire;
