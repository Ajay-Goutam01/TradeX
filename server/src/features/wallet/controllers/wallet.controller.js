import {asyncHandler} from "../../../core/index.js";

import { ApiResponse } from "../../../core/index.js";

import walletService from "../services/wallet.service.js";

export const getWallet = asyncHandler(async (req, res) => {
  const wallet = await walletService.getWallet(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Wallet fetched successfully.", wallet));
});

export const resetWallet = asyncHandler(async (req, res) => {
  const wallet = await walletService.resetWallet(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "Wallet reset successfully.", wallet));
});
