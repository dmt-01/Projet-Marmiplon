import { Controller } from "../libs/Controller";
import { recipes } from "../data";

export class dessertController extends Controller {

    public browseRecipes() {
        this.response.render("pages/Recipe", {
        data:recipes
        });
    }

    public readRecipe() {
        const dessertId = this.request.params.id;
        const dessertSelected = recipes.find (function (recipe) {
            return recipe.id === parseInt(recipesID)
        })
        this.response.render("pages/Recipe", {
            data:recipeSelected
        });
    }

    public editRecipe() {
        const
    }
}