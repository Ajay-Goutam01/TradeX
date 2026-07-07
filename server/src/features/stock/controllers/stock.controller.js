import {asyncHandler} from "../../../core/index.js";
import { ApiResponse } from "../../../core/index.js";

import stockService from "../services/stock.service.js";

export const getStocks = asyncHandler(async (req, res) => {
  const { page, limit, exchange, sector, industry, instrumentType } = req.query;

  const result = await stockService.getStocks({
    page: Number(page) || 1,
    limit: Number(limit) || 25,
    exchange,
    sector,
    industry,
    instrumentType,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Stocks fetched successfully.", result));
});

export const searchStocks = asyncHandler(async (req, res) => {
  const { q } = req.query;

  const stocks = await stockService.searchStocks(q);

  return res
    .status(200)
    .json(new ApiResponse(200, "Stocks fetched successfully.", stocks));
});

export const getStockBySymbol = asyncHandler(async (req, res) => {
  const stock = await stockService.getStockBySymbol(req.params.symbol);

  return res
    .status(200)
    .json(new ApiResponse(200, "Stock fetched successfully.", stock));
});

export const getStocksBySector = asyncHandler(async (req, res) => {
  const stocks = await stockService.getStocksBySector(req.params.sector);

  return res
    .status(200)
    .json(new ApiResponse(200, "Sector stocks fetched successfully.", stocks));
});

export const getStocksByIndustry = asyncHandler(async (req, res) => {
  const stocks = await stockService.getStocksByIndustry(req.params.industry);

  return res
    .status(200)
    .json(
      new ApiResponse(200, "Industry stocks fetched successfully.", stocks),
    );
});
