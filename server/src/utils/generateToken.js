import jwt from "jsonwebtoken";

import { env } from "../config/index.js";

const generateToken = (payload) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};

export default generateToken;