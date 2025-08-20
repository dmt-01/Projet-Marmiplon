import { recipes } from "../data";
import { Controller } from "../libs/Controller";

export class mainController extends Controller {
  public browseMain() {
    this.response.render("pages/Recettes", {
      data: recipes,
    });
  }

  public readMain() {
    const recetteId = this.request.params.id;
    const selectedRecette = recipes.find(function (recette) {
      return recette.id === parseInt(recetteId);
    });
    this.response.render("pages/Recettes", {
      data: selectedRecette,
    });
  }

  public editMain() {
    const id = this.request.params.id;
    this.response.render("pages/Recettes", {
      data: recipes,
    });
  }

  public addMain() {
    this.response.render("pages/Recettes", {
      data: recipes,
    });
  }

  public deleteMain() {
    const id = this.request.params.id;
    this.response.render("pages/Recettes", {
      data: recipes,
    });
  }
}
