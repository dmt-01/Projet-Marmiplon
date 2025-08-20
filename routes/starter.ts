import { Router } from "express";
import { starterController } from "../Controller/starterController";

const starterRouter = Router();


starterRouter.get("/starters", (request, response) => {
  const controller = new starterController(request, response);
  controller.browseStarter();
   
});


starterRouter.get("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.readStarter();
});


starterRouter.put("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.editStarter();
});


starterRouter.post("/starters", (request, response) => {
  const controller = new starterController(request, response);
  controller.addStarter();
});


starterRouter.delete("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.deleteStarter();
});


export default starterRouter;
