import { Router } from "express";

const router = Router();

router.get("/", (request, response) => {
  response.send("coucou")
});

export default router;