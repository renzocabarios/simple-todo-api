import { Router } from "express";
import { authenticate } from "./auth.controller.js";

const router = Router();
router.route("/").post(authenticate);

export default router;
