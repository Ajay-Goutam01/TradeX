import mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      index: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    displayName: {
      type: String,
      trim: true,
    },

    isin: {
      type: String,
      default: null,
      index: true,
    },

    exchange: {
      type: String,
      enum: ["NSE", "BSE"],
      required: true,
      index: true,
    },

    series: {
      type: String,
      default: "EQ",
    },

    instrumentType: {
      type: String,
      enum: ["EQUITY", "ETF", "INDEX", "MUTUAL_FUND", "FUTURE", "OPTION"],
      default: "EQUITY",
      index: true,
    },

    sector: {
      type: String,
      default: null,
      index: true,
    },

    industry: {
      type: String,
      default: null,
      index: true,
    },

    marketCapCategory: {
      type: String,
      enum: ["LARGE_CAP", "MID_CAP", "SMALL_CAP", "MICRO_CAP", "UNKNOWN"],
      default: "UNKNOWN",
      index: true,
    },

    listingDate: {
      type: Date,
      default: null,
    },

    faceValue: {
      type: Number,
      default: null,
    },

    lotSize: {
      type: Number,
      default: 1,
    },

    currency: {
      type: String,
      default: "INR",
    },

    country: {
      type: String,
      default: "India",
    },

    instrumentToken: {
      type: String,
      default: null,
      index: true,
    },

    exchangeToken: {
      type: String,
      default: null,
    },

    yahooSymbol: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    logo: {
      type: String,
      default: null,
    },

    website: {
      type: String,
      default: null,
    },

    description: {
      type: String,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },

    lastSyncedAt: {
      type: Date,
      default: Date.now,
    },

    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  },
);

stockSchema.index({
  companyName: "text",
  symbol: "text",
});

const Stock = mongoose.models.Stock || mongoose.model("Stock", stockSchema);

export default Stock;
