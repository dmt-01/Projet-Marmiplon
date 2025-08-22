"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dessertController_1 = require("../Controller/dessertController");
// changer le nom sur le bon controlleur
const dessertRouter = (0, express_1.Router)();
// Méthode BREAD
// Brows
dessertRouter.get("/", (request, response) => {
    const controller = new dessertController_1.dessertController(request, response);
    controller.browseDessert();
});
// Read
dessertRouter.get("/:id", (request, response) => {
    const controller = new dessertController_1.dessertController(request, response);
    controller.readDessert();
});
// Edit
dessertRouter.put("/:id", (request, response) => {
    const controller = new dessertController_1.dessertController(request, response);
    controller.editDessert();
});
// Add
dessertRouter.post("/", (request, response) => {
    const controller = new dessertController_1.dessertController(request, response);
    controller.addDessert();
});
// Delete
dessertRouter.delete("/:id", (request, response) => {
    const controller = new dessertController_1.dessertController(request, response);
    controller.deleteDessert();
});
exports.default = dessertRouter;
