  import { Controller } from "../libs/Controller";
  import { recipes } from "../data";

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
      this.response.render("pages/Recipe", {
      data: selectedRecette
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