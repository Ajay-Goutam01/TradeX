import { Router } from "express";

import authMiddleware from "../../../middlewares/auth.middleware.js";
import validate from "../../../middlewares/validate.middleware.js";

import {
  getWatchlist,
  addStock,
  removeStock,
} from "../controllers/watchlist.controller.js";

import { addWatchlistSchema } from "../validations/watchlist.validation.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getWatchlist);

router.post("/", validate(addWatchlistSchema), addStock);

router.delete("/:stockId", removeStock);

export default router;
