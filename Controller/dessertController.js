"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dessertController = void 0;
const Controller_1 = require("../libs/Controller");
const data_1 = require("../data");
class dessertController extends Controller_1.Controller {
    browseDessert() {
        this.response.render("pages/Recipe", {
            data: data_1.recipes
        });
    }
    readDessert() {
        const recipeId = this.request.params.id;
        const recipeSelected = data_1.recipes.find(function (recipe) {
            return recipe.id === parseInt(recipeId);
        });
        this.response.render("pages/Recipe", {
            data: recipeSelected
        });
    }
    editDessert() {
        const id = this.request.params.id;
        this.response.render("pages/Recipe", {
            data: data_1.recipes
        });
    }
    addDessert() {
        this.response.render("pages/Recipe", {
            data: data_1.recipes
        });
    }
    deleteDessert() {
        const id = this.request.params.id;
        this.response.render("pages/Recipe", {
            data: data_1.recipes
        });
    }
}
exports.dessertController = dessertController;
