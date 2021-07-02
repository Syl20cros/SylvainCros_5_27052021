////////// Les critères de recherche //////////

class SearchParam {
  constructor() {
    this.mainInput = document.getElementById("research__principal__text-area").value;
    this.ingredients = this.getIngredients();
    this.appareils = this.getAppareils();
    this.ustensiles = this.getUstensiles();
    this.codeStatus = this.status();
  }

/*
  // Recherche principale ok ou pas
    isPrimarySearch () {
     return this.mainInput !== ""  && this.mainInput > 2;
    }
    */

  
  status() {
    //////// cas vide
    if (
      this.mainInput === ""  &&
      this.ingredients.size == 0 &&
      this.appareils.size == 0 &&
      this.ustensiles.size == 0
    ) {
      this.codeStatus = "empty";
    }
    //////// cas recherche principale uniquement
    else if (
      this.mainInput.length > 2 &&
      this.ingredients.size == 0 &&
      this.appareils.size == 0 &&
      this.ustensiles.size == 0
    ) {
      this.codeStatus = "primarySearchOnly";
    }
    //////// cas tag uniquement
    else if (
      (this.mainInput === "" && this.ingredients.size !== 0) ||
      this.appareils.size !== 0 ||
      this.ustensiles.size !== 0
    ) {
      this.codeStatus = "tagSearchOnly";
    }
    //////// cas combinés
    else if (
      this.mainInput.length > 2 &&
      this.ingredients.size !== 0 ||
      this.appareils.size !== 0 ||
      this.ustensiles.size !== 0
    ) {
      this.codeStatus = "mixedSearch";
    }
    //////// cas combinés
    else {
        this.codeStatus = "other";
      }
    return this.codeStatus;
  }


  getMainInput() {
    return this.mainInput;
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
