import bcrypt from "bcryptjs";

import { env } from "../../../config/index.js";
import { ApiError } from "../../../core/index.js";
import { User } from "../../../models/index.js";


class AuthService {
  /**
   * Register a new user
   */
  async register(userData) {
    const { name, email, password } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new ApiError(409, "User already exists with this email.");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, env.BCRYPT_SALT_ROUNDS);

    // Create user
    const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Fetch user again (password excluded because of select: false)
    const user = await User.findById(createdUser._id);

    if (!user) {
      throw new ApiError(500, "Failed to create user.");
    }

    // Generate JWT
    const token = user.generateAccessToken();
    return {
      user,
      token,
    };
  }

  /**
   * Login user
   */
  async login(loginData) {
    const { email, password } = loginData;

    // Get user with password
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new ApiError(401, "Invalid email or password.");
    }

    // Compare password
   const isPasswordMatched = await user.isPasswordCorrect(password);

    if (!isPasswordMatched) {
      throw new ApiError(401, "Invalid email or password.");
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Fetch fresh user without password
    const loggedInUser = await User.findById(user._id);

    // Generate JWT
   const token = user.generateAccessToken();

    return {
      user: loggedInUser,
      token,
    };
  }

  /**
   * Get current logged-in user
   */
  async getCurrentUser(userId) {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found.");
    }

    return user;
  }
}

const authService = new AuthService();

export default authService;
