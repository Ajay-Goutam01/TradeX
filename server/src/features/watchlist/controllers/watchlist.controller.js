import {asyncHandler} from "../../../core/index.js";
import { ApiResponse } from "../../../core/index.js";

import watchlistService from "../services/watchlist.service.js";

export const getWatchlist = asyncHandler(async (req, res) => {
  const watchlist = await watchlistService.getWatchlist(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Watchlist fetched successfully.", watchlist));
});

export const addStock = asyncHandler(async (req, res) => {
  const watchlist = await watchlistService.addStock(
    req.user._id,
    req.validated.body.stockId,
  );

  return res
    .status(201)
    .json(new ApiResponse(201, "Stock added successfully.", watchlist));
});

export const removeStock = asyncHandler(async (req, res) => {
  await watchlistService.removeStock(req.user._id, req.params.stockId);

  return res
    .status(200)
    .json(new ApiResponse(200, "Stock removed successfully."));
});
