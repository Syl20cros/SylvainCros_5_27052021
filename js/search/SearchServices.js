import { recipes } from "../data/recipes.js"

class SearchServices {
    constructor() {
      this.defaultRecipes = recipes;
    }
  
    launchSearch() {
      console.log("launchSearch")
    }
  }
  
  export default SearchServices;