import { Router } from "express";

import {
  getStocks,
  searchStocks,
  getStockBySymbol,
  getStocksBySector,
  getStocksByIndustry,
} from "../controllers/stock.controller.js";
import validate from "../../../middlewares/validate.middleware.js";

import {
  searchStockSchema,
  getStocksSchema,
} from "../validations/stock.validation.js";

const router = Router();
router.get("/", validate(getStocksSchema, "query"), getStocks);

router.get("/search", validate(searchStockSchema, "query"), searchStocks);

router.get("/sector/:sector", getStocksBySector);

router.get("/industry/:industry", getStocksByIndustry);

router.get("/:symbol", getStockBySymbol);

export default router;
