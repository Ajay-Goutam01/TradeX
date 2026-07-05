import { z } from "zod";

import { PASSWORD_REGEX } from "../../../shared/constants/index.js";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .transform((value) => value.toLowerCase()),

  password: z
    .string()
    .regex(
      PASSWORD_REGEX,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character."
    ),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .transform((value) => value.toLowerCase()),

  password: z.string().min(1, "Password is required"),
});