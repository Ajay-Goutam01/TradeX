import {    asyncHandler} from "../../../core/index.js";
import { ApiResponse } from "../../../core/index.js";

import portfolioService from "../services/portfolio.service.js";

export const getPortfolio = asyncHandler(async (req, res) => {
  const portfolio = await portfolioService.getPortfolio(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,

      "Portfolio fetched successfully.",

      portfolio,
    ),
  );
});
