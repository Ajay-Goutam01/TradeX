import { yahooProvider } from "../../../providers/index.js";
import { ApiError } from "../../../core/index.js";
import { DASHBOARD_SYMBOLS } from "../../../shared/constants/market.constants.js";

class MarketService {
  getPeriod(range) {
    const period2 = new Date();
    const period1 = new Date();

    switch (range) {
      case "1d":
        period1.setDate(period1.getDate() - 1);
        break;

      case "5d":
        period1.setDate(period1.getDate() - 5);
        break;

      case "1mo":
        period1.setMonth(period1.getMonth() - 1);
        break;

      case "3mo":
        period1.setMonth(period1.getMonth() - 3);
        break;

      case "6mo":
        period1.setMonth(period1.getMonth() - 6);
        break;

      case "1y":
        period1.setFullYear(period1.getFullYear() - 1);
        break;

      case "2y":
        period1.setFullYear(period1.getFullYear() - 2);
        break;

      case "5y":
        period1.setFullYear(period1.getFullYear() - 5);
        break;

      case "10y":
        period1.setFullYear(period1.getFullYear() - 10);
        break;

      default:
        period1.setMonth(period1.getMonth() - 6);
    }

    return {
      period1,
      period2,
    };
  }
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
      marketState: this.mapMarketStatus(stock.marketState),
      logo: stock.logoUrl || null,
    };
  }

  mapSearch(stocks) {
    return stocks
      .filter(
        (stock) =>
          ["NSI", "BSE"].includes(stock.exchange) &&
          ["EQUITY", "ETF", "INDEX"].includes(stock.quoteType),
      )
      .map((stock) => ({
        symbol: stock.symbol,
        name: stock.longname || stock.shortname,
        exchange: stock.exchange,
        type: stock.quoteType,
      }));
  }

  mapHistory(history) {
    return history.map((candle) => ({
      date: candle.date,
      open: candle.open,
      high: candle.high,
      low: candle.low,
      close: candle.close,
      volume: candle.volume,
    }));
  }
  mapIndices(indices) {
    const result = {};

    indices.forEach((index) => {
      const data = {
        symbol: index.symbol,
        name: index.shortName || index.longName,
        price: index.regularMarketPrice,
        change: index.regularMarketChange,
        changePercent: index.regularMarketChangePercent,
        marketState: this.mapMarketStatus(index.marketState),
      };

      switch (index.symbol) {
        case "^NSEI":
          result.nifty50 = data;
          break;

        case "^NSEBANK":
          result.bankNifty = data;
          break;

        case "^BSESN":
          result.sensex = data;
          break;

        case "NIFTY_FIN_SERVICE.NS":
          result.finnifty = data;
          break;
      }
    });

    return result;
  }
  mapMarketStatus(state) {
    switch (state) {
      case "REGULAR":
        return "Open";

      case "PRE":
        return "Pre Market";

      case "POST":
      case "POSTPOST":
      case "CLOSED":
        return "Closed";

      default:
        return "Unknown";
    }
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
  async getHistory(symbol, interval, range) {
    const { period1, period2 } = this.getPeriod(range);

    const history = await yahooProvider.getHistory(symbol, {
      period1,
      period2,
      interval,
    });

    return {
      symbol,
      interval,
      range,
      candles: this.mapHistory(history),
    };
  }
  async getIndices() {
    const symbols = ["^NSEI", "^NSEBANK", "^BSESN", "NIFTY_FIN_SERVICE.NS"];

    const indices = await yahooProvider.getQuotes(symbols);

    return this.mapIndices(indices);
  }
  async getDashboardQuotes(symbols = DASHBOARD_SYMBOLS) {
    try {
      const quotes = await yahooProvider.getQuotes(symbols);

      return quotes;
    } catch (error) {
      throw error;
    }
  }
  async getLiveQuote(stock) {
    return await this.getQuote(stock.yahooSymbol);
  }
}

const marketService = new MarketService();

export default marketService;
