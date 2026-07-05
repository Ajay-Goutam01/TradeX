import app from "./src/app.js";

import { connectDB, env } from "./src/config/index.js";

import { logger } from "./src/core/index.js";

const startServer = async () => {
  try {
    await connectDB();

    const server = app.listen(env.PORT, () => {
      logger.success(
        `🚀 Server is running in ${env.NODE_ENV} mode on port ${env.PORT}`
      );
    });

    process.on("SIGINT", () => {
      logger.warn("🛑 Shutting down server...");

      server.close(() => {
        logger.success("✅ Server stopped successfully.");
        process.exit(0);
      });
    });

    process.on("SIGTERM", () => {
      logger.warn("🛑 SIGTERM received. Shutting down...");

      server.close(() => {
        logger.success("✅ Server stopped successfully.");
        process.exit(0);
      });
    });

  } catch (error) {
    logger.error("❌ Failed to start server.");
    logger.error(error.message);

    process.exit(1);
  }
};

startServer();