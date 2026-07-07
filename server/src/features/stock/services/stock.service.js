import Stock from "../../../models/stock.model.js";
import { ApiError } from "../../../core/index.js";

class StockService {
  async createStock(payload) {
    return await Stock.create(payload);
  }

  async bulkUpsertStocks(stocks = []) {
    if (!stocks.length) return;

    const operations = stocks.map((stock) => ({
      updateOne: {
        filter: {
          symbol: stock.symbol,
        },
        update: {
          $set: {
            ...stock,
            lastSyncedAt: new Date(),
          },
        },
        upsert: true,
      },
    }));

    return await Stock.bulkWrite(operations);
  }

  async getStockBySymbol(symbol) {
    const stock = await Stock.findOne({
      symbol: symbol.toUpperCase(),
      isActive: true,
    });

    if (!stock) {
      throw new ApiError(404, "Stock not found.");
    }

    return stock;
  }

  async searchStocks(query) {
    return await Stock.find({
      isActive: true,

      $or: [
        {
          symbol: {
            $regex: query,
            $options: "i",
          },
        },

        {
          companyName: {
            $regex: query,
            $options: "i",
          },
        },
      ],
    })
      .limit(20)
      .select("symbol companyName exchange instrumentType sector");
  }

  async getStocks({
    page = 1,
    limit = 25,
    exchange,
    sector,
    industry,
    instrumentType,
  }) {
    const filter = {
      isActive: true,
    };

    if (exchange) {
      filter.exchange = exchange;
    }

    if (sector) {
      filter.sector = sector;
    }

    if (industry) {
      filter.industry = industry;
    }

    if (instrumentType) {
      filter.instrumentType = instrumentType;
    }

    const skip = (page - 1) * limit;

    const [stocks, total] = await Promise.all([
      Stock.find(filter).skip(skip).limit(limit).sort({
        companyName: 1,
      }),

      Stock.countDocuments(filter),
    ]);

    return {
      stocks,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async getStocksBySector(sector) {
    return await Stock.find({
      sector,
      isActive: true,
    });
  }

  async getStocksByIndustry(industry) {
    return await Stock.find({
      industry,
      isActive: true,
    });
  }

  async deactivateStock(symbol) {
    return await Stock.findOneAndUpdate(
      {
        symbol,
      },
      {
        isActive: false,
      },
      {
        new: true,
      },
    );
  }

  async updateStock(symbol, payload) {
    return await Stock.findOneAndUpdate(
      {
        symbol,
      },
      payload,
      {
        new: true,
      },
    );
  }
  async getStockById(stockId) {
    const stock = await Stock.findById(stockId);

    if (!stock) {
      throw new ApiError(404, "Stock not found.");
    }

    return stock;
  }
}

const stockService = new StockService();

export default stockService;
