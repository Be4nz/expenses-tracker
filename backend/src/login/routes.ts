import { Router } from "express";
import controller from "./controller";

const router = Router();

router.post("/register", controller.register);
router.get("/user", controller.user);

export default router;
