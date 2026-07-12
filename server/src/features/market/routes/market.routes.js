import { Router } from "express";

import validate from "../../../middlewares/validate.middleware.js";

import {
  searchStockSchema,
  quoteSchema,
  historySchema,
  historyQuerySchema,
} from "../validations/market.validation.js";

import {
  searchStocks,
  getQuote,
  getHistory,
  getIndices,
  getHome,
  getMarketDetails
} from "../controllers/market.controller.js";

const router = Router();

router.get(
  "/search",
  validate(searchStockSchema, "query"),
  searchStocks
);

router.get(
  "/quote/:symbol",
  validate(quoteSchema, "params"),
  getQuote
);
router.get(
  "/history/:symbol",
  validate(historySchema, "params"),
  validate(historyQuerySchema, "query"),
  getHistory
);
router.get(
  "/indices",
  getIndices
);
router.get(
  "/home",
  getHome
);
router.get(
  "/details/:symbol",
  validate(quoteSchema, "params"),
  getMarketDetails,
);
export default router;