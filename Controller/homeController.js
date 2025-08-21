"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
const data_1 = require("../data");
const Controller_1 = require("../libs/Controller");
// def d'un tableau de données
class HomeController extends Controller_1.Controller {
    // va aller chercher les datas des 3 catégories ds data.ts
    home() {
        const allCategories = data_1.categories;
        // console.log(allCategories);
        this.response.render("pages/Home", {
            categories: allCategories,
            title: "Marmiplon - Accueil",
        });
    }
}
exports.HomeController = HomeController;
