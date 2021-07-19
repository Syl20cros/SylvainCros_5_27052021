// Import de la classe qui construit les 3 selects (tags ingrédients, ustensiles, appareils)
import selectDomBuilder from './dom/Select.js';


// Import des evenements qui vont lancer la recherche
import SearchEvent from './search/SearchEvent.js';


/**************** Affichage des panneaux des tags ***************************/
selectDomBuilder.openCloseTagList();


/********************** liste deroulante ************************************/
const domSelectBuilder = new selectDomBuilder();

// au click d'un tag ajoute à la liste des tags selectionnés ou le retire
domSelectBuilder.dispatchEvent();


// Ferme un tag au clic sur X
domSelectBuilder.closeTagByX();


/********************* recherche *********************************/
const searchEvent = new SearchEvent();
searchEvent.listen();
