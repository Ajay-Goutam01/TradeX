import mongoose from "mongoose";

const holdingSchema = new mongoose.Schema(
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

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    averagePrice: {
      type: Number,
      required: true,
      min: 0,
    },

    investedAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    // exchange: {
    //   type: String,
    //   enum: ["NSE", "BSE"],
    //   required: true,
    // },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

holdingSchema.index(
  {
    user: 1,
    stock: 1,
  },
  {
    unique: true,
  },
);

const Holding =
  mongoose.models.Holding || mongoose.model("Holding", holdingSchema);

export default Holding;
