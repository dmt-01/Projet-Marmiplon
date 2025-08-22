import { Controller } from "../libs/Controller";
import { recipes } from "../data";

export class dessertController extends Controller {

    public browseDessert() {
        this.response.render("pages/Recipe", {
        data:recipes
        });
    }

    public readDessert() {
        const recipeId = this.request.params.id;
        const recipeSelected = recipes.find (function (recipe) {
            return recipe.id === parseInt(recipeId)
        })
        this.response.render("pages/Recipe", {
        data: recipeSelected
        });
    }

    public editDessert() {
        const id = this.request.params.id;
        this.response.render("pages/Recipe", {
        data:recipes
        });
    }

    public addDessert() {
        this.response.render("pages/Recipe", {
        data:recipes
        });
    }

    public deleteDessert() {
        const id = this.request.params.id;
        this.response.render("pages/Recipe", {
        data: recipes
        });
    }
}