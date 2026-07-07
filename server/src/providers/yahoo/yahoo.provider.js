import YahooFinance from "yahoo-finance2";

import { ApiError } from "../../core/index.js";
const yahooFinance = new YahooFinance({
  suppressNotices: ["yahooSurvey"],
});

class YahooProvider {
  async searchStocks(query) {
    const result = await yahooFinance.search(query);

    return result?.quotes ?? [];
  }

  async getQuote(symbol) {
    const stock = await yahooFinance.quote(symbol);

    if (!stock) {
      throw new ApiError(404, "Stock not found.");
    }

    return stock;
  }

  async getQuotes(symbols) {
    return await Promise.all(symbols.map((symbol) => this.getQuote(symbol)));
  }

  async getHistory(symbol, options) {
    const response = await yahooFinance.chart(symbol, {
      period1: options.period1,
      period2: options.period2,
      interval: options.interval,
    });

    const quotes = response.quotes || [];

    return quotes
      .filter(
        (q) =>
          q.open != null && q.high != null && q.low != null && q.close != null,
      )
      .map((q) => ({
        date: q.date,
        open: q.open,
        high: q.high,
        low: q.low,
        close: q.close,
        volume: q.volume ?? 0,
      }));
  }
}

const yahooProvider = new YahooProvider();

export default yahooProvider;
