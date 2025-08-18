import { Router } from "express";
// changer le nom sur le bon controlleur
import { HomeController } from "../Controller/homeController";

const mainCourseRouter = Router();

// Méthode BREAD
// Brows
mainCourseRouter.get("/", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.browseHome();
});

// Rea
mainCourseRouter.get("/:id", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.readHome();
});

// Edit
mainCourseRouter.put("/:id", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.editHome();
});

// Ad
mainCourseRouter.post("/", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.addHome();
});

// Delete
mainCourseRouter.delete("/:id", (request, response) => {
  const controller = new HomeController(request, response);
  // controller.deleteHome();
});

export default mainCourseRouter;
