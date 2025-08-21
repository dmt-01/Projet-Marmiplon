"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.starterController = void 0;
const Controller_1 = require("../libs/Controller");
const data_1 = require("../data");
class starterController extends Controller_1.Controller {
    browseStarter() {
        this.response.render("pages/Recipe", {
            data: data_1.recipes
        });
    }
    readStarter() {
        const recetteId = this.request.params.id;
        const selectedRecette = data_1.recipes.find(function (recipe) {
            return recipe.id === parseInt(recetteId);
        });
        this.response.render("pages/Recipe", {
            data: selectedRecette
        });
    }
    editStarter() {
        const id = this.request.params.id;
        this.response.render("pages/Recipe", {
            data: data_1.recipes
        });
    }
    addStarter() {
        this.response.render("pages/Recipe", {
            data: data_1.recipes
        });
    }
    deleteStarter() {
        const id = this.request.params.id;
        this.response.render("pages/Recipe", {
            data: data_1.recipes
        });
    }
}
exports.starterController = starterController;
