import mongoose from "mongoose";

const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    tradingSymbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    displayName: {
      type: String,
      default: null,
      trim: true,
    },

    slug: {
      type: String,
      lowercase: true,
      trim: true,
    },

    isin: {
      type: String,
      default: null,
    },

    exchange: {
      type: String,
      enum: ["NSE", "BSE"],
      required: true,
      default: "NSE",
    },

    segment: {
      type: String,
      enum: ["CASH", "ETF", "INDEX", "FNO", "MCX", "CURRENCY", "MUTUAL_FUND"],
      default: "CASH",
    },

    instrumentType: {
      type: String,
      enum: ["EQUITY", "ETF", "INDEX", "FUTURE", "OPTION", "MUTUAL_FUND"],
      default: "EQUITY",
    },

    series: {
      type: String,
      default: "EQ",
    },

    sector: {
      type: String,
      default: null,
    },

    industry: {
      type: String,
      default: null,
    },

    marketCapCategory: {
      type: String,
      enum: ["LARGE_CAP", "MID_CAP", "SMALL_CAP", "MICRO_CAP", "UNKNOWN"],
      default: "UNKNOWN",
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

    tickSize: {
      type: Number,
      default: 0.05,
    },

    freezeQuantity: {
      type: Number,
      default: null,
    },

    pricePrecision: {
      type: Number,
      default: 2,
    },

    currency: {
      type: String,
      default: "INR",
    },

    country: {
      type: String,
      default: "India",
    },

    bseCode: {
      type: String,
      default: null,
    },

    nseCode: {
      type: String,
      default: null,
    },

    instrumentToken: {
      type: String,
      default: null,
    },

    exchangeToken: {
      type: String,
      default: null,
    },

    yahooSymbol: {
      type: String,
      required: true,
      trim: true,
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

    searchKeywords: [
      {
        type: String,
        trim: true,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    isDelisted: {
      type: Boolean,
      default: false,
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

/* -------------------- INDEXES -------------------- */

stockSchema.index(
  {
    exchange: 1,
    symbol: 1,
  },
  {
    unique: true,
  },
);

stockSchema.index({
  companyName: "text",
  symbol: "text",
  tradingSymbol: "text",
});

stockSchema.index({ yahooSymbol: 1 });
stockSchema.index({ isin: 1 });
stockSchema.index({ instrumentToken: 1 });
stockSchema.index({ exchangeToken: 1 });
stockSchema.index({ sector: 1 });
stockSchema.index({ industry: 1 });

/* -------------------- MIDDLEWARE -------------------- */

stockSchema.pre("validate", function (next) {
  if (!this.tradingSymbol) {
    this.tradingSymbol = this.symbol;
  }

  if (!this.displayName) {
    this.displayName = this.companyName;
  }

  if (!this.slug && this.companyName) {
    this.slug = this.companyName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  if (!this.searchKeywords?.length) {
    this.searchKeywords = [
      this.symbol,
      this.tradingSymbol,
      this.companyName,
      this.companyName.toLowerCase(),
    ];
  }

  next();
});

const Stock = mongoose.models.Stock || mongoose.model("Stock", stockSchema);

export default Stock;
