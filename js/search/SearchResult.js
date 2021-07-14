 class SearchResult {
    constructor() {
        this.recipes = [];
        this.ingredients = new Set();
        this.appareils = new Set();
        this.ustensiles = new Set();
        this.allFilter = new Set();
    }


    //construction du resultat de la recherche
  buildSearchResult(resultRecipes) {
    this.recipes = resultRecipes;
    this.ingredients.clear();
    this.appareils.clear();
    this.ustensiles.clear();
    this.recipes.forEach((recipe) => {
      recipe.ingredients.forEach((element) => {
        this.ingredients.add(element.ingredient);
      });
      recipe.appliance.forEach((element) => {
        this.appareils.add(element);
      });
      recipe.ustensils.forEach((element) => {
        this.ustensiles.add(element);
      });
    });
    this.allFilter = [
      ...this.ingredients,
      ...this.appareils,
      ...this.ustensiles,
    ];
  }
  
}

export default SearchResult;