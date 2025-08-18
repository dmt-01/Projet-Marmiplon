import { Router } from "express";
import { starterController } from "../Controller/starterController";

const starterRouter = Router();

// Browse
starterRouter.get("/starters", (request, response) => {
  const controller = new starterController(request, response);
  controller.browseRecettes();
   
});

// Read
starterRouter.get("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.readRecette();
});

// Edit
starterRouter.put("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.editRecette();
});

// Add
starterRouter.post("/starters", (request, response) => {
  const controller = new starterController(request, response);
  controller.addRecette();
});

// Delete
starterRouter.delete("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.deleteRecette();
});


export default starterRouter;
