import mongoose from "mongoose";

import { env } from "./index.js";
import { logger } from "../core/index.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(env.MONGODB_URI);

    logger.success("MongoDB Connected");
    logger.info(`Host: ${connection.connection.host}`);
    logger.info(`Database: ${connection.connection.name}`);
  } catch (error) {
    logger.error("MongoDB Connection Failed");
    logger.error(error.message);

    process.exit(1);
  }
};