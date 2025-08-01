import type { Request, Response } from "express";
import { categories } from "../data";

export const homePageController = (request: Request, response: Response) => {
  const allCategories = categories;

  response.render("pages/Acceuil", {
    categories: allCategories,
    title: "Marmiplon - Accueil"
  });
};

// La classe "Controller" est une classe abstraite
// qui sert de base pour tous les contrôleurs
// de l'application.

// Elle contient les propriétés
// `request` et `response` qui sont utilisées
// pour accéder à la requête et à la réponse
// dans les méthodes des contrôleurs qui en héritent.
export abstract class Controller {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
}