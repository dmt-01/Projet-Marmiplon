import { Router } from "express";
import { starterController } from "../Controller/starterController";

const starterRouter = Router();

starterRouter.get("/", (request, response) => {
  const controller = new starterController(request, response);
  controller.browseRecettes();
});

starterRouter.get("/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.readRecette();
});

starterRouter.put("/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.editRecette();
});

starterRouter.post("/", (request, response) => {
  const controller = new starterController(request, response);
  controller.addRecette();
});

starterRouter.delete("/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.deleteRecette();
});

export default starterRouter;
