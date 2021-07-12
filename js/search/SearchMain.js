

class SearchMain {
    static searchPrimary(searchParam, recipes) {
        this.filteredRecipes = new Set();
        this.recipes = recipes;

        this.recipes.forEach(recipe => {
            const recipeName = recipe.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            const inputValue = searchParam.mainInput.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            if (recipeName.indexOf(inputValue) > -1) {
                this.filteredRecipes.add(recipe);
            } else if (recipe.description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(inputValue) > -1) {
                this.filteredRecipes.add(recipe)
            }
            else {
                recipe.ingredients.forEach((element) => {
                    if (element.ingredient.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(inputValue) > -1) {
                        this.filteredRecipes.add(recipe);
                    }
                }); 
            }
            //console.log(recipeName);
        });

        //Afficher message resultat vide
        if (this.filteredRecipes.size == 0 ) {
            document.getElementById('messageRecipeNotFound').classList.add('showMessageRecipeNotFound');
        } else {
            document.getElementById('messageRecipeNotFound').classList.remove('showMessageRecipeNotFound');
        }
        if (searchParam.mainInput.toLowerCase() == 0) { //Supprime message si champ de recherche vide
            document.getElementById('messageRecipeNotFound').classList.remove('showMessageRecipeNotFound');
        }
        console.log(this.recipes);
        console.log(this.filteredRecipes);
        return this.filteredRecipes;
        
    }
}

export default SearchMain;
