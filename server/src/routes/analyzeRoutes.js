import { Router } from "express";
import {
  analyzeUrl,
  analyzeMessage
} from "../controllers/analyzeController.js";

const router = Router();

router.post("/url", analyzeUrl);

router.post("/message", analyzeMessage);

export default router;