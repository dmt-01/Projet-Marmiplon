import { Router } from "express";
// changer le nom sur le bon controlleur
import { recipeController } from "../Controller/starterController";

const starterRouter = Router();

// Browse
starterRouter.get("/desserts", (request, response) => {
  const controller = new recipeController(request, response);
  controller.browseRecettes();
});

// Read
starterRouter.get("/desserts/:id", (request, response) => {
  const controller = new recipeController(request, response);
  controller.readRecette();
});

// Edit
starterRouter.put("/desserts/:id", (request, response) => {
  const controller = new recipeController(request, response);
  controller.editRecette();
});

// Add
starterRouter.post("/desserts", (request, response) => {
  const controller = new recipeController(request, response);
  controller.addRecette();
});

// Delete
starterRouter.delete("/desserts/:id", (request, response) => {
  const controller = new recipeController(request, response);
  controller.deleteRecette();
});

export default starterRouter;
