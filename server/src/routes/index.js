import { Router } from "express";

import healthRoutes from "../features/health/index.js";
import authRoutes from "../features/auth/index.js";
import marketRoutes from "../features/market/index.js";

const router = Router();

router.use("/health", healthRoutes);

router.use("/auth", authRoutes);

router.use("/market", marketRoutes);

export default router;