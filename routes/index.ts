import { Router } from "express";
import home from "./home";
import starterRouter from "./starter";
import mainCourseRouter from "./main_course";
import dessertRouter from "./dessert";

export const router = Router();

router.use(home);

router.use(`/starter`, starterRouter);

router.use(`/main`, mainCourseRouter);

router.use(`/dessert`, dessertRouter);

export default router;
