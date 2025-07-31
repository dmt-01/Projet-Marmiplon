import { Router } from "express";

 

const recettesRouter = Router();

recettesRouter.get("/", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.browseRecettes();
});

recettesRouter.get("/add", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.createRecette(); 
});

recettesRouter.post("/", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.addRecette();
});

recettesRouter.get("/:id", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.readRecette();
});

recettesRouter.put("/:id", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.editRecette();
});

recettesRouter.delete("/:id", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.deleteRecette();
});

export default recettesRouter;
