import { Router } from "express";

import validate from "../../../middlewares/validate.middleware.js";

import {
  getStocks,
  searchStocks,
  getStockById,
  getStockBySymbol,
  getStocksBySector,
  getStocksByIndustry,
} from "../controllers/stock.controller.js";

import {
  searchStockSchema,
  getStocksSchema,
} from "../validations/stock.validation.js";

const router = Router();

/* ---------- List ---------- */

router.get("/", validate(getStocksSchema, "query"), getStocks);

/* ---------- Search ---------- */

router.get("/search", validate(searchStockSchema, "query"), searchStocks);

/* ---------- Filters ---------- */

router.get("/sector/:sector", getStocksBySector);

router.get("/industry/:industry", getStocksByIndustry);

/* ---------- Single ---------- */

router.get("/id/:id", getStockById);

router.get("/:symbol", getStockBySymbol);

export default router;
