import mongoose from "mongoose";

const walletSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    availableBalance: {
      type: Number,
      default: 1000000,
      min: 0,
    },

    blockedBalance: {
      type: Number,
      default: 0,
      min: 0,
    },

    // investedAmount: {
    //   type: Number,
    //   default: 0,
    //   min: 0,
    // },

    // totalPortfolioValue: {
    //   type: Number,
    //   default: 1000000,
    //   min: 0,
    // },

    currency: {
      type: String,
      default: "INR",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Wallet = mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);

export default Wallet;
