import { Router } from "express";

import healthRoutes from "../features/health/index.js";
import authRoutes from "../features/auth/index.js";
import marketRoutes from "../features/market/index.js";
import stockRoutes from "../features/stock/index.js";
import walletRoutes from "../features/wallet/index.js";
import orderRoutes from "../features/order/index.js";
import portfolioRoutes from "../features/portfolio/index.js";
import holdingRoutes from "../features/holding/routes/holding.routes.js";
import watchlistRoutes from "../features/watchlist/routes/watchlist.route.js";
import transactionRoutes from "../features/transaction/routes/transaction.route.js"

const router = Router();

router.use("/health", healthRoutes);

router.use("/auth", authRoutes);

router.use("/market", marketRoutes);

router.use("/stocks", stockRoutes);
router.use("/wallet", walletRoutes);
router.use("/orders", orderRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/holdings", holdingRoutes);
router.use("/watchlist", watchlistRoutes);
router.use("/transactions", transactionRoutes);

export default router;
