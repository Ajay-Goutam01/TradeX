import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      default: null,
      index: true,
    },

    type: {
      type: String,
      enum: ["BUY", "SELL", "DEPOSIT", "WITHDRAW", "RESET", "REFUND"],
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    balanceBefore: {
      type: Number,
      required: true,
    },

    balanceAfter: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      default: null,
    },
    realizedProfit: {
      type: Number,
      default: 0,
    },

    averageCost: {
      type: Number,
      default: 0,
    },

    quantity: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["SUCCESS", "FAILED", "PENDING"],
      default: "SUCCESS",
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

transactionSchema.index({
  user: 1,
  createdAt: -1,
});

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

export default Transaction;
