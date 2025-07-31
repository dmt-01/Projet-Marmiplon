import  router  from "./router";

 
router.get("/", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.browseRecettes();
});

router.get("/add", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.createRecette(); 
});

router.post("/", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.addRecette();
});

router.get("/:id", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.readRecette();
});

router.put("/:id", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.editRecette();
});

router.delete("/:id", (request, response) => {
  const controller = new RecettesController(request, response);
  controller.deleteRecette();
});

export default router;