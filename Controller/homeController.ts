import { Controller } from "../libs/Controller";
import { categories } from "../data";
// def d'un tableau de données

export class HomeController extends Controller {
  // va aller chercher les datas des 3 catégories ds data.ts
  public home() {
    const allCategories = categories;

    this.response.render("pages/Acceuil", {
      categories: allCategories,
      title: "Marmiplon - Accueil",
    });

    this.response.render("pages/Accueil");
  }
}
