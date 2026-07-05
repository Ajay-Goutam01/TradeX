import { yahooProvider } from "../../../providers/index.js";
import { ApiError } from "../../../core/index.js";

class MarketService {
  mapQuote(stock) {
    return {
      symbol: stock.symbol,

      name: stock.longName || stock.shortName,

      exchange: stock.fullExchangeName,

      currency: stock.currency,

      price: stock.regularMarketPrice,

      previousClose: stock.regularMarketPreviousClose,

      open: stock.regularMarketOpen,

      high: stock.regularMarketDayHigh,

      low: stock.regularMarketDayLow,

      volume: stock.regularMarketVolume,

      marketCap: stock.marketCap,

      change: stock.regularMarketChange,

      changePercent: stock.regularMarketChangePercent,

      marketState: stock.marketState,

      logo: stock.logoUrl || null,
    };
  }

mapSearch(stocks) {
  return stocks
    .filter(
      (stock) =>
        ["NSI", "BSE"].includes(stock.exchange) &&
        ["EQUITY", "ETF", "INDEX"].includes(stock.quoteType)
    )
    .map((stock) => ({
      symbol: stock.symbol,
      name: stock.longname || stock.shortname,
      exchange: stock.exchange,
      type: stock.quoteType,
    }));
}
  async searchStocks(query) {
    if (!query?.trim()) {
      throw new ApiError(400, "Search query is required.");
    }

    const stocks = await yahooProvider.searchStocks(query);

    return this.mapSearch(stocks);
  }

  async getQuote(symbol) {
    if (!symbol?.trim()) {
      throw new ApiError(400, "Stock symbol is required.");
    }

    const stock = await yahooProvider.getQuote(symbol);

    return this.mapQuote(stock);
  }
}

const marketService = new MarketService();

export default marketService;
