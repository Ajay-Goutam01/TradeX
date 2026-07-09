import mongoose from "mongoose";

import Order from "../../../models/Order.model.js";
import { ApiError } from "../../../core/index.js";

import stockService from "../../stock/services/stock.service.js";
import marketService from "../../market/services/market.service.js";
import walletService from "../../wallet/services/wallet.service.js";
import holdingService from "../../holding/services/holding.service.js";

class OrderService {
  async buy(userId, payload) {
    const session = await mongoose.startSession();

    session.startTransaction();

    try {
      const { stockId, quantity, orderType = "MARKET" } = payload;

      // Step 1
      const stock = await stockService.getStockById(stockId);

      // Step 2
      const quote = await marketService.getLiveQuote(stock);

      const marketPrice = quote.price;

      if (!marketPrice || marketPrice <= 0) {
        throw new ApiError(400, "Unable to fetch live market price.");
      }

      //   let executionPrice = marketPrice;

      //   if (orderType === "LIMIT") {

      //     if (!price) {

      //       throw new ApiError(
      //         400,
      //         "Limit price is required."
      //       );

      //     }

      //     executionPrice = price;

      //   }
      const executionPrice = marketPrice;
      const totalAmount = executionPrice * quantity;

      // Step 3
      await walletService.validateBalance(userId, totalAmount, session);
      // Step 4
      const [order] = await Order.create(
        [
          {
            user: userId,

            stock: stock._id,

            transactionType: "BUY",

            orderType,

            quantity,

            price: executionPrice,

            executedPrice: marketPrice,

            status: "EXECUTED",
          },
        ],
        {
          session,
        },
      );

      // Step 5
      await holdingService.addHolding(
        userId,
        stock._id,
        quantity,
        executionPrice,
        session,
      );

      // Step 6
      await walletService.debitBalance(
        userId,
        totalAmount,
        `Bought ${quantity} ${stock.symbol}`,
        order._id,
        "BUY",
        session,
      );

      await session.commitTransaction();

      return await Order.findById(order._id).populate(
        "stock",
        "symbol companyName exchange",
      );
    } catch (error) {
      await session.abortTransaction();

      throw error;
    } finally {
      session.endSession();
    }
  }
  async sell(userId, payload) {
    const session = await mongoose.startSession();

    session.startTransaction();

    try {
      const { stockId, quantity } = payload;

      const stock = await stockService.getStockById(stockId);

      const currentHolding = await holdingService.getHolding(
        userId,
        stock._id,
        session,
      );

      if (!currentHolding) {
        throw new ApiError(400, "Holding not found.");
      }

      if (currentHolding.quantity < quantity) {
        throw new ApiError(400, "Insufficient quantity.");
      }

      const quote = await marketService.getLiveQuote(stock);

      const executionPrice = quote.price;

      if (quantity <= 0) {
        throw new ApiError(400, "Quantity must be greater than zero.");
      }

      const totalAmount = executionPrice * quantity;
      const [order] = await Order.create(
        [
          {
            user: userId,

            stock: stock._id,

            transactionType: "SELL",

            orderType: "MARKET",

            quantity,

            price: executionPrice,

            executedPrice: executionPrice,

            status: "EXECUTED",
          },
        ],
        {
          session,
        },
      );
      const {
        holding: updateHolding,

        averageCost,

        costOfSoldShares,
      } = await holdingService.reduceHolding(
        userId,

        stock._id,

        quantity,

        session,
      );

      const realizedProfit = totalAmount - costOfSoldShares;

      await walletService.creditBalance(
        userId,

        totalAmount,

        `Sold ${quantity} ${stock.symbol}`,

        order._id,

        "SELL",

        session,

        {
          realizedProfit,

          averageCost,

          quantity,
        },
      );

      await session.commitTransaction();

      return order;
    } catch (error) {
      await session.abortTransaction();

      throw error;
    } finally {
      session.endSession();
    }
  }
  async getOrders(userId) {
    return await Order.find({
      user: userId,
    })
      .populate("stock", "symbol companyName exchange")
      .sort({
        createdAt: -1,
      });
  }

  async getOrderById(userId, orderId) {
    const order = await Order.findOne({
      _id: orderId,
      user: userId,
    }).populate("stock", "symbol companyName exchange");

    if (!order) {
      throw new ApiError(404, "Order not found.");
    }

    return order;
  }
}

const orderService = new OrderService();

export default orderService;
