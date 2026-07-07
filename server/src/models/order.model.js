import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    stock: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stock",
      required: true,
      index: true,
    },

    transactionType: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
      index: true,
    },

    orderType: {
      type: String,
      enum: ["MARKET", "LIMIT", "STOP_LOSS", "STOP_LIMIT"],
      default: "MARKET",
    },

    productType: {
      type: String,
      enum: ["DELIVERY", "INTRADAY"],
      default: "DELIVERY",
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    executedPrice: {
      type: Number,
      default: null,
    },

    status: {
      type: String,
      enum: ["PENDING", "EXECUTED", "CANCELLED", "REJECTED"],
      default: "PENDING",
      index: true,
    },

    remarks: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

orderSchema.index({
  user: 1,
  createdAt: -1,
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
