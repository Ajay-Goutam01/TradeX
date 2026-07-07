import Watchlist from "../../../models/Watchlist.model.js";
import { ApiError } from "../../../core/index.js";
import stockService from "../../stock/services/stock.service.js";

class WatchlistService {
  async getWatchlist(userId) {
    return await Watchlist.find({
      user: userId,
    })
      .populate("stock", "symbol companyName exchange yahooSymbol")
      .sort({
        createdAt: -1,
      });
  }

  async addStock(userId, stockId) {
    await stockService.getStockById(stockId);

    const exists = await Watchlist.findOne({
      user: userId,
      stock: stockId,
    });

    if (exists) {
      throw new ApiError(409, "Stock already exists in watchlist.");
    }

    const watchlist = await Watchlist.create({
      user: userId,
      stock: stockId,
    });

    return watchlist.populate(
      "stock",
      "symbol companyName exchange yahooSymbol",
    );
  }

  async removeStock(userId, stockId) {
    const deleted = await Watchlist.findOneAndDelete({
      user: userId,
      stock: stockId,
    });

    if (!deleted) {
      throw new ApiError(404, "Stock not found in watchlist.");
    }

    return deleted;
  }
}

const watchlistService = new WatchlistService();

export default watchlistService;
