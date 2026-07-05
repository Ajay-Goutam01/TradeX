import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";

import loggerMiddleware from "./middlewares/logger.middleware.js";
import limiterMiddleware from "./middlewares/limiter.middleware.js";

import { corsOptions } from "./config/index.js";

import routes from "./routes/index.js";

import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

/**
 * Security Middleware
 */
app.use(helmet());

/**
 * Response Compression
 */
app.use(compression());

/**
 * CORS
 */
app.use(cors(corsOptions));

/**
 * Request Logger
 */
app.use(loggerMiddleware);

/**
 * Parse JSON Body
 */
app.use(express.json());

/**
 * Parse Form Data
 */
app.use(
  express.urlencoded({
    extended: true,
  }),
);

/**
 * Parse Cookies
 */
app.use(cookieParser());

/**
 * Rate Limiter
 */
app.use(limiterMiddleware);

/**
 * API Routes
 */
app.use("/api/v1", routes);

/**
 * 404 Handler
 */
app.use(notFoundMiddleware);

/**
 * Global Error Handler
 */
app.use(errorMiddleware);

export default app;
