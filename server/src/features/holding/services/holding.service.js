import Holding from "../../../models/Holding.model.js";
import { ApiError } from "../../../core/index.js";

class HoldingService {
  async getHolding(userId, stockId, session = null) {
    return await Holding.findOne({
      user: userId,
      stock: stockId,
      isActive: true,
    }).session(session);
  }
  async createHolding(userId, stockId, quantity, price, session = null) {
    const [holding] = await Holding.create(
      [
        {
          user: userId,
          stock: stockId,
          quantity,
          averagePrice: price,
          investedAmount: quantity * price,
        },
      ],
      {
        session,
      },
    );

    return holding;
  }

  async addHolding(userId, stockId, quantity, price, session = null) {
    const holding = await this.getHolding(userId, stockId, session);

    if (!holding) {
      return await this.createHolding(
        userId,
        stockId,
        quantity,
        price,
        session,
      );
    }

    const totalQty = holding.quantity + quantity;

    const totalInvestment = holding.investedAmount + quantity * price;

    holding.quantity = totalQty;

    holding.investedAmount = totalInvestment;

    holding.averagePrice = totalInvestment / totalQty;

    await holding.save({
      session,
    });

    return holding;
  }

  async reduceHolding(userId, stockId, quantity, session = null) {
    const holding = await this.getHolding(userId, stockId, session);

    if (!holding) {
      throw new ApiError(400, "Holding not found.");
    }

    if (holding.quantity < quantity) {
      throw new ApiError(400, "Insufficient holdings.");
    }

    const averageCost = holding.averagePrice;

    const costOfSoldShares = averageCost * quantity;

    holding.quantity -= quantity;

    holding.investedAmount = Math.max(
      0,
      holding.investedAmount - costOfSoldShares,
    );
    if (holding.quantity > 0) {
      holding.averagePrice = holding.investedAmount / holding.quantity;
    }

    if (holding.quantity === 0) {
      await Holding.deleteOne(
        {
          _id: holding._id,
        },
        {
          session,
        },
      );

      return {
        holding: null,
        averageCost,
        costOfSoldShares,
      };
    }

    await holding.save({
      session,
    });

    return {
      holding,
      averageCost,
      costOfSoldShares,
    };
  }

async getHoldings(userId) {
  return await Holding.find({
    user: userId,
  })
    .populate(
      "stock",
      "symbol yahooSymbol companyName exchange"
    )
    .lean();
}
}
const holdingService = new HoldingService();

export default holdingService;
