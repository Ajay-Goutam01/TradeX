import marketService from "../services/market.service.js";

import {
  ApiResponse,
  asyncHandler,
} from "../../../core/index.js";

const searchStocks = asyncHandler(async (req, res) => {
 const stocks = await marketService.searchStocks(
    req.validated.query.q
);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Stocks fetched successfully.",
      stocks
    )
  );
});

const getQuote = asyncHandler(async (req, res) => {
 const stock = await marketService.getQuote(
    req.validated.params.symbol
);

  return res.status(200).json(
    new ApiResponse(
      200,
      "Stock fetched successfully.",
      stock
    )
  );
});

export {
  searchStocks,
  getQuote,
};