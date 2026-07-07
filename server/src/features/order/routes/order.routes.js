import { Router } from "express";

import authMiddleware from "../../../middlewares/auth.middleware.js";
import validate from "../../../middlewares/validate.middleware.js";

import {
  buyOrderSchema,
  sellOrderSchema,
} from "../validations/order.validation.js";

import {
  buyOrder,
  sellOrder,
  getOrderById,
  getOrders,
} from "../controllers/order.controller.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getOrders);

router.get("/:orderId", getOrderById);

router.post("/buy", validate(buyOrderSchema), buyOrder);

router.post("/sell", validate(sellOrderSchema), sellOrder);

export default router;
