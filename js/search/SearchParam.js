////////// Les critères de recherche //////////

class SearchParam {
  constructor() {
    this.mainInput = document.getElementById("research__principal__text-area").value;
    this.ingredients = this.getIngredients();
    this.appareils = this.getAppareils();
    this.ustensiles = this.getUstensiles();
    //this.codeStatus = this.status();
  }


    // Recherche principale vide ou pas
    PrimarySearchInf3 () {
        return this.mainInput.trim().length <= 2;
    }

    // Recherche principale ok ou pas
    isValidPrimarySearch () {
        return this.mainInput.trim().length > 2;
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
      //console.dir(ingredientsDom);
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
      //console.dir(appareilsDom);
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
      //console.dir(ustensilesDom);
    });
    return ustensiles;
  }
}

export default SearchParam;
