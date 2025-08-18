import { Router } from "express";
import recetteRouter from "./recipe";
import categorieRouter from "./categories";

export const router = Router();

router.use(categorieRouter);

router.use(`/Categorie`, recetteRouter);

export default router;
