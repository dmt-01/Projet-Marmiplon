import { Router } from "express";
import { dessertController } from "../Controller/dessertController";
// changer le nom sur le bon controlleur

const dessertRouter = Router();

// Méthode BREAD
// Brows
dessertRouter.get("/", (request, response) => {
  const controller = new dessertController(request, response);
  controller.browseDessert();
});

// Read
dessertRouter.get("/:id", (request, response) => {
  const controller = new dessertController(request, response);
  controller.readDessert();
});

// Edit
dessertRouter.put("/:id", (request, response) => {
  const controller = new dessertController(request, response);
  controller.editDessert();
});

// Add
dessertRouter.post("/", (request, response) => {
  const controller = new dessertController(request, response);
  controller.addDessert();
});

// Delete
dessertRouter.delete("/:id", (request, response) => {
  const controller = new dessertController(request, response);
  controller.deleteDessert();
});

export default dessertRouter;
