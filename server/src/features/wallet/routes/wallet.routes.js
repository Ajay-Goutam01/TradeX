import { Router } from "express";

import authMiddleware from "../../../middlewares/auth.middleware.js";

import { getWallet, resetWallet } from "../controllers/wallet.controller.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getWallet);

router.post("/reset", resetWallet);

export default router;
