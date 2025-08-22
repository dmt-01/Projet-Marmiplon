  import { Controller } from "../libs/Controller";
  import { recipes, recipeIngredients,RecipeInstruction,ingredients } from "../data";

  export class starterController extends Controller {


    public browseStarter() {
       this.response.render("pages/Recipe", {
      data:recipes
       });
    }
    
    public readStarter() {
      const recetteId = this.request.params.id;
      const selectedRecette = recipes.find (function (recipe) {
        return  recipe.id === parseInt(recetteId)
      })
      

       const selectedIngridients = recipeIngredients.filter (function (dataIngredients) {
        return dataIngredients.recipeId === parseInt(recetteId);
      
       }).map(function(dataIngredients) {
        const data = ingredients.find (function (ingredientInfo) {
          return ingredientInfo.id === dataIngredients.ingredientId;
        })
         return  {
           ...dataIngredients,name:data?.name 
         }
       });

       console.log(selectedIngridients)
      this.response.render("pages/Recipe", {
      data: selectedRecette, ingredients:selectedIngridients 
      });
    
 }
      

    public editStarter() {
      const id = this.request.params.id;
     this.response.render("pages/Recipe", {
      data:recipes
      });
    }


    public addStarter() {
    this.response.render("pages/Recipe", { 
    data:recipes
          });
    }


    public deleteStarter() {
      const id = this.request.params.id;
      this.response.render("pages/Recipe", {
       data:recipes
      });
    }
  }