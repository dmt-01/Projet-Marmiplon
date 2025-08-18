import { Controller } from "../libs/Controller";

export class recipeController extends Controller {

  public browseRecettes() {
    this.response.render("pages/Recettes", {
      message: "Voici la liste des recettes",
      
    });
  }

  public readRecette() {
    const id = this.request.params.id;
    this.response.render("pages/Recettes", {
      message: `Détails de la recette ${id}`,
    });
  }

  public editRecette() {
    const id = this.request.params.id;
   
    this.response.render("pages/Recettes", {
      message: `Modifier la recette ${id}`,
    });
  }

  public addRecette() {
    
    this.response.render("pages/Recettes", {
      message: "Ajouter une nouvelle recette",
    });
  }

  public deleteRecette() {
    const id = this.request.params.id;
    this.response.render("pages/Recettes", {
      message: `Supprimer la recette ${id}`,
    });
  }
}