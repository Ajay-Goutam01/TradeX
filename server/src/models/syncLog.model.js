import mongoose from "mongoose";

const syncLogSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
      required: true,
      enum: ["NSE", "BSE"],
      index: true,
    },

    status: {
      type: String,
      required: true,
      enum: [
        "RUNNING",
        "SUCCESS",
        "FAILED",
      ],
      default: "RUNNING",
      index: true,
    },

    totalRecords: {
      type: Number,
      default: 0,
    },

    insertedRecords: {
      type: Number,
      default: 0,
    },

    updatedRecords: {
      type: Number,
      default: 0,
    },

    failedRecords: {
      type: Number,
      default: 0,
    },

    startedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },

    finishedAt: {
      type: Date,
      default: null,
    },

    duration: {
      type: Number,
      default: 0,
    },

    error: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const SyncLog =
  mongoose.models.SyncLog ||
  mongoose.model(
    "SyncLog",
    syncLogSchema
  );

export default SyncLog;