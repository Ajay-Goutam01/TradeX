import { Router } from "express";

import {
  register,
  login,
  logout,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import validate from "../../../middlewares/validate.middleware.js";

import {
  registerSchema,
  loginSchema,
} from "../validations/auth.validation.js";

import authMiddleware from "../../../middlewares/auth.middleware.js";

const router = Router();

/**
 * Public Routes
 */
router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);

/**
 * Protected Routes
 */
router.post(
  "/logout",
  authMiddleware,
  logout
);

router.get(
  "/me",
  authMiddleware,
  getCurrentUser
);

export default router;