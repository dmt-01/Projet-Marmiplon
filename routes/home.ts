import { Router } from "express";
import { HomeController } from "../Controller/homeController";

const home = Router();

home.get("/", (request, response) => {
  const controller = new HomeController(request, response);
});

export default home;
