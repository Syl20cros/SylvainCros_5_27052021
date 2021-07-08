import recipesAll from "../data/recipes.js";
import SearchParam from "./SearchParam.js";
import SearchResult from "./SearchResult.js";
import Recipe from "../dom/Recipe.js";
import DomRechercheSecondaire from "../dom/Select.js";
import SearchMain from "./SearchMain.js";
//import SearchTag from "./SearchTag.js";
import recipes from "../data/recipes.js";
//import DomFilters from "../../dom/selectTags/DomFilters.js";

class SearchService {
  constructor() {
    this.recipes = recipesAll;
  }

  launchSearch() {
    this.searchParam = new SearchParam();
    this.searchResult = new SearchResult();
    this.searchResultFinal = this.recipes;
    
    if (this.searchParam.primarySearchValid()){
      this.searchResultFinal = SearchMain.research(
        this.searchParam,
        this.searchResultFinal
      );
      console.log('primary');
    }
    if (this.searchParam.isValidSecondarySearch()){
      //code lancer recherche secondaire en fonction recherche principale
      this.searchResultFinal = SearchMain.research(   // SearchMain a remplacer par : SearchTag
        this.searchParam,
        this.searchResultFinal
      );
    }
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
