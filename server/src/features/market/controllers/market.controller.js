import marketService from "../services/market.service.js";
import marketDashboardService from "../services/market.dashboard.service.js";

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

const getHistory = asyncHandler(async (req, res) => {
  const { symbol } = req.validated.params;

  const { interval, range } = req.validated.query;

  const history = await marketService.getHistory(
    symbol,
    interval,
    range
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      "Historical data fetched successfully.",
      history
    )
  );
});

const getIndices = asyncHandler(async(req,res)=>{
  const indices = await marketService.getIndices();

  return res.status(200).json(
    new ApiResponse(
      200,
      "Indices fetched successfully.",
      indices
    )
  );
})
const getHome = asyncHandler(async (req, res) => {

  const home =
    await marketDashboardService.getHome();

  return res.status(200).json(
    new ApiResponse(
      200,
      "Market dashboard fetched successfully.",
      home
    )
  );

});



export {
  searchStocks,
  getQuote,
  getHistory,
  getIndices,
  getHome
};