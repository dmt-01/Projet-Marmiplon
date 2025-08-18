import router from "./router";
// import { request, response } from "express";


//Méthode BREAD
//Browse
router.get("/", (request, response) => {
    const controller = new HomeController(request, response);
    controller.browseHome();
});

//Read
router.get("/:id", (request, response) => {
    const controller = new HomeController(request, response);
    controller.readHome();
});

//Edit 
router.put("/:id", (request, response) => {
    const controller = new HomeController(request, response);
    controller.editHome();
});

//Add
router.post("/", (request, response) => {
    const controller = new HomeController(request, response);
    controller.addHome();
});

//Delete
router.delete("/:id", (request, response) => {
    const controller = new HomeController(request, response);
    controller.deleteHome();
});

export default router;
