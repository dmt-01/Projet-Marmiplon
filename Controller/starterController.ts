import { Controller } from "../libs/Controller";

const recettes = [
  { id: 1, quantity: 1, unit: "tranche", ingredientId: 1, recipeId: 101 },
  { id: 2, quantity: 2, unit: "unités", ingredientId: 2, recipeId: 101 },
  { id: 3, quantity: 5, unit: "feuilles", ingredientId: 3, recipeId: 101 },
  { id: 4, quantity: 2, unit: "cuillères à soupe", ingredientId: 4, recipeId: 101 },
  { id: 5, quantity: 1, unit: "unité", ingredientId: 5, recipeId: 102 },
  { id: 6, quantity: 2, unit: "unités", ingredientId: 2, recipeId: 102 },
  { id: 7, quantity: 1, unit: "unité", ingredientId: 6, recipeId: 102 },
  { id: 8, quantity: 200, unit: "grammes", ingredientId: 7, recipeId: 102 },
  { id: 9, quantity: 10, unit: "unités", ingredientId: 8, recipeId: 102 }
];
  

  export class starterController extends Controller {


    public browseRecettes() {
      this.response.render("pages/Recettes", {
      data:recettes
       });
    }

    public readRecette() {
      const recetteId = this.request.params.id;
      const selectedRecette = recettes.find (function (recette) {
        return  recette.id === parseInt(recetteId)
      })
      this.response.render("pages/Recettes", {
      data: selectedRecette
      });
    }

    public editRecette() {
      const id = this.request.params.id;
      this.response.render("pages/Recettes", {
      data:recettes
      });
    }

    public addRecette() {
    this.response.render("pages/Recettes", { 
    data:recettes
          });
    }

    public deleteRecette() {
      const id = this.request.params.id;
      this.response.render("pages/Recettes", {
       data:recettes
      });
    }
  }

