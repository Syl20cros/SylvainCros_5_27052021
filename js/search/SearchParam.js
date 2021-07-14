////////// Les critères de recherche //////////

class SearchParam {
  constructor() {
    this.mainInput = document.getElementById("research__principal__text-area").value;
    this.ingredients = this.getIngredients();
    this.appareils = this.getAppareils();
    this.ustensiles = this.getUstensiles();
    this.allSelected = new Set([...this.getIngredients(),...this.getAppareils(),...this.getUstensiles()]);
  }


  // Recherche principale inf a 3 ou pas
  primarySearchValid() {
      return this.mainInput.trim().length > 2;
  }

  // Recherche principale vide
  primarySearchEmpty() {
    return this.mainInput === "";
  }

  // Recherche secondaire ok ou pas
  isValidSecondarySearch() {
    return this.ingredients.size !== 0 || this.appareils.size !== 0 || this.ustensiles.size !== 0;
  }

  //retourne un tableau des éléments selectionnés pour chaque catégorie
  getIngredients() {
    const ingredients = new Set();
    const ingredientsDom = Array.from(
      document.querySelectorAll("#ingredients .tagSelected")
      );
    ingredientsDom.forEach((element) => {
      ingredients.add(element.innerHTML);
    });
    return ingredients;
  }

  getAppareils() {
    const appareils = new Set();
    const appareilsDom = Array.from(
      document.querySelectorAll("#appareils .tagSelected")
    );
    appareilsDom.forEach((element) => {
      appareils.add(element.innerHTML);
    });
    return appareils;
  }

  getUstensiles() {
    const ustensiles = new Set();
    const ustensilesDom = Array.from(
      document.querySelectorAll("#ustensiles .tagSelected")
    );
    ustensilesDom.forEach((element) => {
      ustensiles.add(element.innerHTML);
    });
    return ustensiles;
  }
}

export default SearchParam;
