import {asyncHandler}from "../../../core/index.js";
import { ApiResponse } from "../../../core/index.js";

import holdingService from "../services/holding.service.js";

export const getHoldings = asyncHandler(async (req, res) => {
  const holdings = await holdingService.getHoldings(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Holdings fetched successfully.", holdings));
});
