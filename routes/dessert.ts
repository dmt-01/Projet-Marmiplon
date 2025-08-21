import { Router } from "express";
import { dessertController } from "../Controller/dessertController";
// changer le nom sur le bon controlleur

const dessertRouter = Router();

// Méthode BREAD
// Brows
dessertRouter.get("/", (request, response) => {
  const controller = new dessertController(request, response);
  controller.browseRecipes();
});

// Read
dessertRouter.get("/:id", (request, response) => {
  const controller = new dessertController(request, response);
  // controller.readHome();
});

// Edit
dessertRouter.put("/:id", (request, response) => {
  const controller = new dessertController(request, response);
  // controller.editHome();
});

// Add
dessertRouter.post("/", (request, response) => {
  const controller = new dessertController(request, response);
  // controller.addHome();
});

// Delete
dessertRouter.delete("/:id", (request, response) => {
  const controller = new dessertController(request, response);
  // controller.deleteHome();
});

export default dessertRouter;
