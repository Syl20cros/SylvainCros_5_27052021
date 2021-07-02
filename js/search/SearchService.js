import recipesAll from "../data/recipes.js";
import SearchParam from "./SearchParam.js";
import SearchResult from "./SearchResult.js";
import Recipe from "../dom/Recipe.js";
import DomRechercheSecondaire from "../dom/Select.js";
//import DomFilters from "../../dom/selectTags/DomFilters.js";

class SearchService {
  constructor() {
    this.recipes = recipesAll;
    this.searchResultFinal = this.recipes;
  }

  launchSearch() {
    this.searchParam = new SearchParam();
    this.searchResult = new SearchResult();

    switch (this.searchParam.codeStatus) {
      case "empty": // si aucun param, affiche toutes les recettes
        //console.log("empty2");
        this.searchResult.buildSearchResult(this.searchResultFinal);
        this.buildDom(this.searchResult);
        break;

      case "primarySearchOnly": // si texte présent dans champ principal
        //cherche les recettes suivant la recherche principale
        //console.log("primarySearchOnly2");
        break;

      case "mixedSearch": // si recherche principale et tag present
        //console.log("mixedSearch2");
        break;

      case "tagSearchOnly": // si uniquement tag selectionné
        //console.log("tagSearchOnly2");
        this.searchResult.buildSearchResult(this.searchResultFinal);
        this.buildDom(this.searchResult);
        break;

      default:
        break;
    }
    //console.log(this.searchResultFinal);
    return this.searchResultFinal;
  }

 test (){
    this.searchResult.buildSearchResult(this.searchResultFinal);
    this.buildDom(this.searchResult);
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
