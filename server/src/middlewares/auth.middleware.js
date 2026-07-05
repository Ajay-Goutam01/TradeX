import jwt from "jsonwebtoken";

import { env } from "../config/index.js";
import { ApiError, asyncHandler } from "../core/index.js";
import { User } from "../models/index.js";

const authMiddleware = asyncHandler(async (req, res, next) => {
  // Get token from cookies
 const token = req.cookies?.accessToken ||req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Authentication required.");
  }

  // Verify token
  const decoded = jwt.verify(token, env.JWT_SECRET);

  // Find user
  const user = await User.findById(decoded.userId);

  if (!user) {
    throw new ApiError(401, "User not found.");
  }

  // Attach user to request
  req.user = user;

  next();
});

export default authMiddleware;