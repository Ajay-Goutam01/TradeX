import { env } from "./env.js";

export const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
};