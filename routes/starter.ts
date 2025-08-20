import { Router } from "express";
import { starterController } from "../Controller/starterController";

const starterRouter = Router();


starterRouter.get("/starters", (request, response) => {
  const controller = new starterController(request, response);
  controller.browseRecettes();
   
});


starterRouter.get("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.readRecette();
});


starterRouter.put("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.editRecette();
});


starterRouter.post("/starters", (request, response) => {
  const controller = new starterController(request, response);
  controller.addRecette();
});


starterRouter.delete("/starters/:id", (request, response) => {
  const controller = new starterController(request, response);
  controller.deleteRecette();
});


export default starterRouter;
