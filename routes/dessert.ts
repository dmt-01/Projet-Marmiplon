import { Router } from "express";
// changer le nom sur le bon controlleur
import { HomeController } from "../Controller/homeController";

const dessertRouter = Router();

// Méthode BREAD
// Brows
dessertRouter.get("/", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.browseHome();
});

// Rea
dessertRouter.get("/:id", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.readHome();
});

// Edit
dessertRouter.put("/:id", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.editHome();
});

// Ad
dessertRouter.post("/", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.addHome();
});

// Delete
dessertRouter.delete("/:id", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.deleteHome();
});

export default dessertRouter;
