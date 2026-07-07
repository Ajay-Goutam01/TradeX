import { Router } from "express";

import authMiddleware from "../../../middlewares/auth.middleware.js";

import { getHoldings } from "../controllers/holding.controller.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getHoldings);

export default router;
