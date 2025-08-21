"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const starterController_1 = require("../Controller/starterController");
const starterRouter = (0, express_1.Router)();
starterRouter.get("/", (request, response) => {
    const controller = new starterController_1.starterController(request, response);
    controller.browseStarter();
});
starterRouter.get("/:id", (request, response) => {
    const controller = new starterController_1.starterController(request, response);
    controller.readStarter();
});
starterRouter.put("/:id", (request, response) => {
    const controller = new starterController_1.starterController(request, response);
    controller.editStarter();
});
starterRouter.post("/", (request, response) => {
    const controller = new starterController_1.starterController(request, response);
    controller.addStarter();
});
starterRouter.delete("/:id", (request, response) => {
    const controller = new starterController_1.starterController(request, response);
    controller.deleteStarter();
});
exports.default = starterRouter;
