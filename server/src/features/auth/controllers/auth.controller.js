import authService from "../services/auth.service.js";

import { ApiResponse, asyncHandler } from "../../../core/index.js";
import { cookieOptions } from "../../../config/index.js";

const register = asyncHandler(async (req, res) => {
  const { user, token } = await authService.register(req.validated.body);

  res.cookie("accessToken", token, cookieOptions);

  return res
    .status(201)
    .json(new ApiResponse(201, "User registered successfully.", user));
});

const login = asyncHandler(async (req, res) => {
  const { user, token } = await authService.login(req.validated.body);

  res.cookie("accessToken", token, cookieOptions);

  return res
    .status(200)
    .json(new ApiResponse(200, "Login successful.", user));
});

const logout = asyncHandler(async (req, res) => {
  res.clearCookie("accessToken");

  return res
    .status(200)
    .json(new ApiResponse(200, "Logout successful."));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await authService.getCurrentUser(req.user._id);

  return res
    .status(200)
    .json(new ApiResponse(200, "User fetched successfully.", user));
});

export { register, login, logout, getCurrentUser };