import {asyncHandler} from "../../../utils/asyncHandler.js";
import { ApiResponse } from "../../../core/index.js";

import transactionService from "../services/transaction.service.js";

export const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await transactionService.getTransactions(req.user._id);

  return res
    .status(200)
    .json(
      new ApiResponse(200, "Transactions fetched successfully.", transactions),
    );
});
