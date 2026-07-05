import { ApiResponse, asyncHandler } from "../../../core/index.js";

const healthCheck = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(
      200,
      "TradeX Backend is running successfully.",
      {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
      }
    )
  );
});

export { healthCheck };