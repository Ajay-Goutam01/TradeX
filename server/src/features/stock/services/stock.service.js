import Stock from "../../../models/stock.model.js";
import { ApiError } from "../../../core/index.js";
import stockService from "../../stock/services/stock.service.js";

class StockService {
  async createStock(payload) {
    return await Stock.create(payload);
  }

  async bulkUpsertStocks(stocks = []) {
    if (!stocks.length) return;

    const operations = stocks.map((stock) => ({
      updateOne: {
        filter: {
          exchange: stock.exchange,
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

    return await Stock.bulkWrite(operations, {
      ordered: false,
    });
  }

  async getStockById(stockId) {
    const stock = await Stock.findById(stockId).lean();

    if (!stock) {
      throw new ApiError(404, "Stock not found.");
    }

    return stock;
  }

  async getStockBySymbol(symbol) {
    const stock = await Stock.findOne({
      symbol: symbol.toUpperCase(),
      isActive: true,
    })
      .select(
        `
      symbol
      companyName
      displayName
      exchange
      yahooSymbol
      instrumentType
      sector
      industry
      logo
      isin
      faceValue
      lotSize
      tickSize
    `,
      )
      .lean();

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
        {
          displayName: {
            $regex: query,
            $options: "i",
          },
        },
        {
          searchKeywords: {
            $regex: query,
            $options: "i",
          },
        },
      ],
    })
      .select(
        "symbol tradingSymbol companyName displayName exchange instrumentType sector industry yahooSymbol logo",
      )
      .limit(20)
      .lean();
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

    if (exchange) filter.exchange = exchange;
    if (sector) filter.sector = sector;
    if (industry) filter.industry = industry;
    if (instrumentType) filter.instrumentType = instrumentType;

    const skip = (page - 1) * limit;

    const [stocks, total] = await Promise.all([
      Stock.find(filter)
        .sort({ companyName: 1 })
        .skip(skip)
        .limit(limit)
        .lean(),

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
    }).lean();
  }

  async getStocksByIndustry(industry) {
    return await Stock.find({
      industry,
      isActive: true,
    }).lean();
  }

  async updateStock(symbol, payload) {
    return await Stock.findOneAndUpdate(
      {
        symbol: symbol.toUpperCase(),
      },
      payload,
      {
        new: true,
      },
    );
  }

  async deactivateStock(symbol) {
    return await Stock.findOneAndUpdate(
      {
        symbol: symbol.toUpperCase(),
      },
      {
        isActive: false,
      },
      {
        new: true,
      },
    );
  }
}

export default new StockService();
