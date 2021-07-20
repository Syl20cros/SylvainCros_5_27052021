// Import de la classe qui construit les 3 selects (tags ingrédients, ustensiles, appareils)
import selectDomBuilder from './dom/Select.js';

// Import de la classe qui construit la liste des recettes
//import recipieDomBuilder from './dom/Recipe.js';

// Import des evenements qui vont lancer la recherche
import SearchEvent from './search/SearchEvent.js';


/**************** Affichage des panneaux des tags ***************************/
selectDomBuilder.openCloseTagList();


/********************** liste deroulante ************************************/
const domSelectBuilder = new selectDomBuilder();

// au click d'un tag ca l'ajoute a la liste des tags selectionnés ou le retire
domSelectBuilder.dispatchEvent();


// Ferme un tag au clic sur X
domSelectBuilder.closeTagByX();


/********************* recherche *********************************/
const searchEvent = new SearchEvent();
searchEvent.listen();


/********************* Lancement la recherche a l'ouverture *********************************/
searchEvent.searchService.launchSearch();