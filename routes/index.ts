import { Router } from "express";
import home from "./home";
import starterRouter from "./starter";
import mainCourseRouter from "./main_course";
import dessertRouter from "./dessert";

export const router = Router();

router.use(home);

router.use(starterRouter);

router.use(`/home`, mainCourseRouter);

router.use(`/home`, dessertRouter);

export default router;
