import { Router } from "express";
import { starterController } from "../Controller/starterController";

const starterRouter = Router();

starterRouter.get("/", (request, response) => {
  const controller = new starterController(request, response);
  controller.browseStarter();
});

starterRouter.get("/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.readStarter();
});

starterRouter.put("/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.editStarter();
});

starterRouter.post("/", (request, response) => {
  const controller = new starterController(request, response);
  controller.addStarter();
});

starterRouter.delete("/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.deleteStarter();
});

export default starterRouter;
