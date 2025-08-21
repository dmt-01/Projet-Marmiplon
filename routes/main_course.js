"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mainCourseController_1 = require("../Controller/mainCourseController");
const mainCourseRouter = (0, express_1.Router)();
mainCourseRouter.get("/", (request, response) => {
    const controller = new mainCourseController_1.mainController(request, response);
    controller.browseMain();
});
mainCourseRouter.get("/:id", (request, response) => {
    const controller = new mainCourseController_1.mainController(request, response);
    controller.readMain();
});
mainCourseRouter.put("/:id", (request, response) => {
    const controller = new mainCourseController_1.mainController(request, response);
    controller.editMain();
});
mainCourseRouter.post("/", (request, response) => {
    const controller = new mainCourseController_1.mainController(request, response);
    controller.addMain();
});
mainCourseRouter.delete("/:id", (request, response) => {
    const controller = new mainCourseController_1.mainController(request, response);
    controller.deleteMain();
});
exports.default = mainCourseRouter;
