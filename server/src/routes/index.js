import { Router } from "express";

import healthRoutes from "../features/health/index.js";
import authRoutes from "../features/auth/index.js";

const router = Router();

router.use("/health", healthRoutes);

router.use("/auth", authRoutes);

export default router;