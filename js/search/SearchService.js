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
    //this.filtered = SearchMain;
  }

  launchSearch() {
    this.searchParam = new SearchParam();
    console.log(this.searchParam);
    this.searchResult = new SearchResult();
    this.searchResultFinal = this.recipes;
    
    if (this.searchParam.primarySearchValid() || this.searchParam.primarySearchEmpty()) {
      //Definition des inputs de la recherche principale
      this.searchResultFinal = SearchMain.searchPrimary(
        this.searchParam,
        this.searchResultFinal
      );
    }

    if (this.searchParam.isValidSecondarySearch()){
      //Definition des inputs de la recherche secondaire en fonction recherche principale
      this.searchResultFinal =  SearchTag.searchByTag(   
        this.searchParam,
        this.searchResultFinal
      );
    }

    this.searchResult.buildSearchResult(this.searchResultFinal);
    this.buildDom(this.searchResult);
  }
  
  //Clear tag input
  clearInputTag() {
    console.log('clear');
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
