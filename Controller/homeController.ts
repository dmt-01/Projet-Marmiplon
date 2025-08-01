import { Controller } from "../libs/Controller";

// def d'un tableau de données

export class HomeController extends Controller {
    // va aller chercher les datas des 3 catégories ds data.ts
public home() {
//console.log(this.home);

this.response.render("pages/Accueil");
}
}



