import mongoose from "mongoose";

const instrumentSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true,
      index: true,
      uppercase: true,
      trim: true,
    },

    exchange: {
      type: String,
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    isin: {
      type: String,
      default: null,
    },

    sector: {
      type: String,
      default: null,
    },

    industry: {
      type: String,
      default: null,
    },

    instrumentType: {
      type: String,
      default: "EQUITY",
    },

    isActive: {
      type: Boolean,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Instrument = mongoose.model(
  "Instrument",
  instrumentSchema
);

export default Instrument;