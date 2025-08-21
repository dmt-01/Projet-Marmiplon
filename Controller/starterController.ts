  import { Controller } from "../libs/Controller";
  import { recipes } from "../data";
  

  export class starterController extends Controller {


    public browseRecipes() {
      this.response.render("pages/Recipe", {
      data:recipes
       });
    }

    public readRecipe() {
      const recipesId = this.request.params.id;
      const recipeSelected = recipes.find (function (recipe) {
        return  recipe.id === parseInt(recipesId)
      })
      this.response.render("pages/Recipe", {
      data:recipeSelected
      });
    }
    
    public editRecipe() {
      const id = this.request.params.id;
      this.response.render("pages/Recipe", {
      data:recipes
      });
    }

    public addRecipe() {
    this.response.render("pages/Recipe", { 
    data:recipes
          });
    }

    public deleteRecipe() {
      const id = this.request.params.id;
      this.response.render("pages/Recipe", {
       data:recipes
      });
    }
  }


