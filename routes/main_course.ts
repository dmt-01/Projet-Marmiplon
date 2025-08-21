import { Router } from "express";
import { mainController } from "../Controller/mainCourseController";


const mainCourseRouter = Router();


mainCourseRouter.get("/", (request, response) => {
  const controller = new mainController(request, response);
  controller.browseMain();
});

mainCourseRouter.get("/:id", (request, response) => {
  const controller = new mainController(request, response);
  controller.readMain();
});

mainCourseRouter.put("/:id", (request, response) => {
  const controller = new mainController(request, response);
  controller.editMain();
});

mainCourseRouter.post("/", (request, response) => {
  const controller = new mainController(request, response);
 controller.addMain();
});

mainCourseRouter.delete("/:id", (request, response) => {
  const controller = new mainController(request, response);
  controller.deleteMain();
});

export default mainCourseRouter;