import { Router } from "express";

import validate from "../../../middlewares/validate.middleware.js";

import {
  searchStockSchema,
  quoteSchema,
} from "../validations/market.validation.js";

import {
  searchStocks,
  getQuote,
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

export default router;