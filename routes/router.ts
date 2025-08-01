import { Router } from "express";
import { homePageController } from "../libs/Controller";


// Ce dossier sert a instancier le Router de Express
// pour pouvoir l'utiliser dans toute nos routes sans avoir a le répéter

export const router = Router();

router.get("/", homePageController);

export default router;