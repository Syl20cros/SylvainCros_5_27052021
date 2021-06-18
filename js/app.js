// Import du menu liste deroulante tag
import displayModal from './tag/tag-display.js';

// Import du fake resultat de recherche
import resultatRechercheMock from './data/Fixture.js';

// Import de la classe qui construit les 3 selects (tags ingrédients, ustensiles, appareils)
import selectDomBuilder from './dom/Select.js';

// Import de la classe qui construit la liste des recettes
import recipieDomBuilder from './dom/Recipe.js';


/**************** Affichage des panneaux des tags ***************************/
displayModal.openCloseTagList();


/********************** liste deroulante ************************************/
const domSelectBuilder = new selectDomBuilder();

// au click d'un tag sa l'ajoute a la liste des tags selectionnés ou le retire
domSelectBuilder.dispatchEvent();

// affiche les trois listes deroulantes
domSelectBuilder.creerLesTroisListesSelect(resultatRechercheMock);

// Ferme un tag au clicsur X
domSelectBuilder.closeTagByX();


/********************** Affichage recette ***********************************/
const domRecipieBuilder = new recipieDomBuilder();

domRecipieBuilder.afficherRecettes(resultatRechercheMock.recipies);

