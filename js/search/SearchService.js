import recipesAll from "../data/recipes.js";
import SearchParam from "./SearchParam.js";
import SearchResult from "./SearchResult.js";
import Recipe from "../dom/Recipe.js";
import DomRechercheSecondaire from "../dom/Select.js";
import SearchMain from "./SearchMain.js";
//import DomFilters from "../../dom/selectTags/DomFilters.js";

class SearchService {
  constructor() {
    this.recipes = recipesAll;
    this.searchResultFinal = this.recipes;
  }

  launchSearch() {
    this.searchParam = new SearchParam();
    this.searchResult = new SearchResult();

    if (this.searchParam.PrimarySearchInf3()){
      this.searchResult.buildSearchResult(recipesAll);
      this.buildDom(this.searchResult);
      console.log('show all');
      if (this.searchParam.isValidSecondarySearch()){
        //code lancer recherche secondaire
        console.log('secondary shearch');
      }
    } else {
      this.searchResultFinal = SearchMain.research(this.searchParam);
      this.searchResult.buildSearchResult(this.searchResultFinal);
      this.buildDom(this.searchResult);
      console.log('primary shearch');
      if (this.searchParam.isValidSecondarySearch()){
        //code lancer recherche secondaire en fonction recherche principale
        console.log('secondary shearch');
      }
    }
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
