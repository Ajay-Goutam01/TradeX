import { Router } from "express";

import authMiddleware from "../../../middlewares/auth.middleware.js";

import { getTransactions } from "../controllers/transaction.controller.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getTransactions);

export default router;
