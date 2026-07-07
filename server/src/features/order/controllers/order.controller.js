import {asyncHandler} from "../../../core/index.js";
import { ApiResponse } from "../../../core/index.js";

import orderService from "../services/order.service.js";

export const buyOrder = asyncHandler(async (req, res) => {
  const order = await orderService.buy(req.user._id, req.validated.body);

  return res
    .status(201)
    .json(new ApiResponse(201, "Buy order executed successfully.", order));
});

export const sellOrder = asyncHandler(async (req, res) => {
  const order = await orderService.sell(req.user._id, req.validated.body);

  return res
    .status(201)
    .json(new ApiResponse(201, "Sell order executed successfully.", order));
});
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.getOrders(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Orders fetched successfully.", orders));
});

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await orderService.getOrderById(
    req.user._id,
    req.params.orderId,
  );

  return res
    .status(200)
    .json(new ApiResponse(200, "Order fetched successfully.", order));
});
