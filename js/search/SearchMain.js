

class SearchMain {
    static searchPrimary(searchParam, recipes) {
        this.filteredRecipes = new Set();
        this.recipes = recipes;

        this.recipes.forEach(recipe => {
            const recipeName = recipe.name.toLowerCase();
            const inputValue = searchParam.mainInput.toLowerCase();

            if (recipeName.indexOf(inputValue) > -1) {
                this.filteredRecipes.add(recipe);
            } else if (recipe.description.toLowerCase().indexOf(inputValue) > -1) {
                this.filteredRecipes.add(recipe)
            }
            else {
                recipe.ingredients.forEach((element) => {
                    if (element.ingredient.toLowerCase().indexOf(inputValue) > -1) {
                        this.filteredRecipes.add(recipe);
                    }
                }); 
            }
            console.log(recipe.ingredients);
        });

        //Afficher message resultat vide
        if (this.filteredRecipes.size == 0 ){
            document.getElementById('messageRecipeNotFound').classList.add('showMessageRecipeNotFound');
        } else {
            document.getElementById('messageRecipeNotFound').classList.remove('showMessageRecipeNotFound');
        }

        return this.filteredRecipes;
    }
}

export default SearchMain;
