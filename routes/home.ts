// Voir commentaire dans router.ts
import  router  from "./router";

//Browse
router.get("/", (request, response) => {
    const controller = new HomeController(request, response);
    controller.browseHome();
});

//Read
router.get("/:id",(request, response) => {
    const controller = new HomeController(request, response);
    controller.readHome();
});

//Eddit
router.put("/:id", (request, response) => {
    const controller = new HomeController(request, response);
    controller.edditHome();
});

//Add
router.post("/", (request, response) => {
    const controller = new HomeController(request, response);
    controller.addHome();
});

//Delete
router.delete("/:id", (request, response) => {
    const controller = new homeController(request, response);
    controller.deleteHome();
});

export default router;
