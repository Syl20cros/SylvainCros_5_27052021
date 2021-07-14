import recipes from '../data/recipes.js';

class SearchTag {
    static searchByTag(searchParam, searchResultFinal) {
        this.searchTagFiltered = new Set();
        searchResultFinal.forEach(recipe => {
            recipe.allProduct = new Set([
                ...recipe.ingredients.map(element => (element.ingredient)),
                ...recipe.appliance,
                ...recipe.ustensils
            ]);
            console.log(recipe);
            
            let indexOfRecipe = recipe.id - 1;

            if (Array.from(searchParam.allSelected).every(element => Array.from(recipes[indexOfRecipe].allProduct).includes(element))) {
                this.searchTagFiltered.add(recipe);
            }
        });

        return this.searchTagFiltered;
    }
}

export default SearchTag;
