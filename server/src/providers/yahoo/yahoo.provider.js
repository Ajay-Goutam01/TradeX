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
    return await yahooFinance.historical(symbol, options);
  }
}

const yahooProvider = new YahooProvider();

export default yahooProvider;
