import { Router } from "express";

import authMiddleware from "../../../middlewares/auth.middleware.js";

import { getPortfolio } from "../controllers/portfolio.controller.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getPortfolio);

export default router;
