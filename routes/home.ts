import { request, response, Router } from "express";

const homeRouter = Router();

//Browse
homeRouter.get("/", (request, response) => {
    const controller = new HomeController(request, response);
    controller.browseHome();
});

//Read
homeRouter.get("/:id",(request, response) => {
    const controller = new HomeController(request, response);
    controller.readHome();
});

//Eddit
homeRouter.put("/:id", (request, response) => {
    const controller = new HomeController(request, response);
    controller.edditHome();
});

//Add
homeRouter.post("/", (request, response) => {
    const controller = new HomeController(request, response);
    controller.addHome();
});

//Delete
homeRouter.delete("/:id", (request, response) => {
    const controller = new homeController(request, response);
    controller.deleteHome();
});

export default homeRouter;
