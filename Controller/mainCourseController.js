"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainController = void 0;
const data_1 = require("../data");
const Controller_1 = require("../libs/Controller");
class mainController extends Controller_1.Controller {
    browseMain() {
        this.response.render("pages/Recipe", {
            data: data_1.recipes,
        });
    }
    readMain() {
        const recetteId = this.request.params.id;
        const selectedRecette = data_1.recipes.find(function (recette) {
            return recette.id === parseInt(recetteId);
        });
        this.response.render("pages/Recipe", {
            data: selectedRecette,
        });
    }
    editMain() {
        const id = this.request.params.id;
        this.response.render("pages/Recipe", {
            data: data_1.recipes,
        });
    }
    addMain() {
        this.response.render("pages/Recipe", {
            data: data_1.recipes,
        });
    }
    deleteMain() {
        const id = this.request.params.id;
        this.response.render("pages/Recipe", {
            data: data_1.recipes,
        });
    }
}
exports.mainController = mainController;
