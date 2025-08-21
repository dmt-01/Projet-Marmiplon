"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
// La classe "Controller" est une classe abstraite
// qui sert de base pour tous les contrôleurs
// de l'application.
// Elle contient les propriétés
// `request` et `response` qui sont utilisées
// pour accéder à la requête et à la réponse
// dans les méthodes des contrôleurs qui en héritent.
class Controller {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }
}
exports.Controller = Controller;
