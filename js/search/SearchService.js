import recipesAll from "../data/recipes.js";
import SearchParam from "./SearchParam.js";
import SearchResult from "./SearchResult.js";
import Recipe from "../dom/Recipe.js";
import DomRechercheSecondaire from "../dom/Select.js";
import SearchMain from "./SearchMain.js";
import SearchTag from "./SearchTag.js";
//import recipes from "../data/recipes.js";

class SearchService {
  constructor() {
    this.recipes = recipesAll;
    this.filtered = SearchMain;
    this.mainInputOldValue = '';
    this.tagInputOldValue = '';
    this.searchResultFinal = this.recipes;
  }

  launchSearch() {
    this.searchParam = new SearchParam();
    this.searchResult = new SearchResult();
    this.mainInputNewValue = this.searchParam.mainInput;
    this.tagInputNewValue = this.searchParam.allSelected;
    this.searchResultFinal = this.recipes;

    //Utilisation du resultat precedent ou pas pour les inputs
    if ((this.mainInputNewValue.length < this.mainInputOldValue.length) // si nouvelle recherche contient moins de carractere que la precedente
      || (this.tagInputNewValue.size < this.tagInputOldValue.size)){ // ou si il y a moins de tag a la nouvelle recherche
      this.searchResultFinal = this.recipes; // searchResultFinal = toutes les recettes
    }
    
    if (this.searchParam.primarySearchValid() || this.searchParam.primarySearchEmpty()) {
      //Lancement de la recherche principale
      this.searchResultFinal = SearchMain.searchPrimary(
        this.searchParam,
        this.searchResultFinal
      );
    }

    if (this.searchParam.isValidSecondarySearch()){
      //Lancement de la recherche secondaire en fonction recherche principale
      this.searchResultFinal =  SearchTag.searchByTag(   
        this.searchParam,
        this.searchResultFinal
      );
    }

    this.mainInputOldValue = this.searchParam.mainInput; //deffinition du mainInputOldValue avant la nouvelle recherche
    this.tagInputOldValue = this.searchParam.allSelected; //deffinition du tagInputOldValue avant la nouvelle recherche
    this.searchResult.buildSearchResult(this.searchResultFinal);
    this.buildDom(this.searchResult);
  }
  
  //Clear tag input
  clearInputTag() {
    document.getElementById('inputIngredients').value = "";
    document.getElementById('inputAppareils').value = "";
    document.getElementById('inputUstencils').value = "";
  }

  //Construction du DOM avec resultat de la recherche
  buildDom(result) {
    Recipe.afficherRecettes(result.recipes);
    DomRechercheSecondaire.buildFilter(
      this.searchParam.ingredients,
      result.ingredients,
      "ingredients",
      "ingredient"
    );
    DomRechercheSecondaire.buildFilter(
      this.searchParam.appareils,
      result.appareils,
      "appareils",
      "appareil"
    );
    DomRechercheSecondaire.buildFilter(
      this.searchParam.ustensiles,
      result.ustensiles,
      "ustensiles",
      "ustensile"
    );
  }
}

export default SearchService;
