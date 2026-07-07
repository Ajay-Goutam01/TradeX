import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

watchlistSchema.index(
  {
    user: 1,
    stock: 1,
  },
  {
    unique: true,
  }
);

const Watchlist =
  mongoose.models.Watchlist ||
  mongoose.model("Watchlist", watchlistSchema);

export default Watchlist;