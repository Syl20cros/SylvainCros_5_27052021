
///////////////// open and close ingredients
const btnTagIngredients = document.querySelector(".research__tag--ingredients");
const modalTagIngredients = document.querySelector(".research__liste--ingredients");
let modalTagIngredientsVisible = false;
 
btnTagIngredients.addEventListener('click', displayModalIngredients);

export function displayModalIngredients() {
    if (modalTagIngredientsVisible == false) {
        modalTagIngredients.classList.add('modalTag-show');
        btnTagIngredients.classList.add('research__tag--bigger');
        modalTagIngredientsVisible = true;
        modalTagAppareils.classList.remove('modalTag-show');
        btnTagAppareils.classList.remove('research__tag--bigger');
        modalTagUstensiles.classList.remove('modalTag-show');
        btnTagUstensiles.classList.remove('research__tag--bigger');
    } else if (modalTagIngredientsVisible == true){
        modalTagIngredients.classList.remove('modalTag-show');
        btnTagIngredients.classList.remove('research__tag--bigger');
        modalTagIngredientsVisible = false;
    }
}

///////////////// open and close Appareils
const btnTagAppareils = document.querySelector(".research__tag--appareils");
const modalTagAppareils = document.querySelector(".research__liste--appareils");
let modalTagAppareilsVisible = false;

btnTagAppareils.addEventListener('click', displayModalAppareils);

export function displayModalAppareils() {
    if (modalTagAppareilsVisible == false) {
        modalTagAppareils.classList.add('modalTag-show');
        btnTagAppareils.classList.add('research__tag--bigger');
        modalTagAppareilsVisible = true;
        modalTagIngredients.classList.remove('modalTag-show');
        btnTagIngredients.classList.remove('research__tag--bigger');
        modalTagUstensiles.classList.remove('modalTag-show');
        btnTagUstensiles.classList.remove('research__tag--bigger');
    } else if (modalTagAppareilsVisible == true){
        modalTagAppareils.classList.remove('modalTag-show');
        btnTagAppareils.classList.remove('research__tag--bigger');
        modalTagAppareilsVisible = false;
    }
}

///////////////// open and close Ustensiles
const btnTagUstensiles = document.querySelector(".research__tag--ustensiles");
const modalTagUstensiles = document.querySelector(".research__liste--ustensiles");
let modalTagUstensilesVisible = false;

btnTagUstensiles.addEventListener('click', displayModalUstensiles);

export function displayModalUstensiles() {
    if (modalTagUstensilesVisible == false) {
        modalTagUstensiles.classList.add('modalTag-show');
        btnTagUstensiles.classList.add('research__tag--bigger');
        modalTagUstensilesVisible = true;
        modalTagIngredients.classList.remove('modalTag-show');
        btnTagIngredients.classList.remove('research__tag--bigger');
        modalTagAppareils.classList.remove('modalTag-show');
        btnTagAppareils.classList.remove('research__tag--bigger');
    } else if (modalTagUstensilesVisible == true){
        modalTagUstensiles.classList.remove('modalTag-show');
        btnTagUstensiles.classList.remove('research__tag--bigger');
        modalTagUstensilesVisible = false;
    }
}

