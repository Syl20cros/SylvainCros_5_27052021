// Import du fake resultat de recherche
import resultatRechercheMock from './data/Fixture.js';

// Import de la classe qui construit les 3 selects (tags ingrédients, ustensiles, appareils)
import selectDomBuilder from './dom/Select.js';

// Import de la classe qui construit la liste des recettes
import recipieDomBuilder from './dom/Recipe.js';

// Import des evenements qui vont lancer la recherche
import SearchEvent from './search/SearchEvent.js';


/**************** Affichage des panneaux des tags ***************************/
selectDomBuilder.openCloseTagList();


/********************** liste deroulante ************************************/
const domSelectBuilder = new selectDomBuilder();

// au click d'un tag ca l'ajoute a la liste des tags selectionnés ou le retire
domSelectBuilder.dispatchEvent();

// affiche les trois listes deroulantes
//domSelectBuilder.creerLesTroisListesSelect(resultatRechercheMock);

// Ferme un tag au clic sur X
domSelectBuilder.closeTagByX();


/********************** Affichage des recette *********************************/
//const domRecipieBuilder = new recipieDomBuilder();

//domRecipieBuilder.afficherRecettes(resultatRechercheMock.recipies);


/********************* recherche principale *********************************/
const searchEvent = new SearchEvent();
searchEvent.listen();
