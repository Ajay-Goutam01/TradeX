import marketService from "./market.service.js";
import marketCache from "./market.cache.js";

class MarketDashboardService {
  sortStocks(quotes, field, order = "desc") {
    return [...quotes].sort((a, b) => {
      const first = a[field] ?? 0;
      const second = b[field] ?? 0;

      return order === "desc" ? second - first : first - second;
    });
  }

  mapDashboardStocks(stocks) {
    return stocks.map((stock) => ({
      symbol: stock.symbol,
      name: stock.shortName || stock.longName,
      exchange: stock.fullExchangeName,
      price: stock.regularMarketPrice,
      previousClose: stock.regularMarketPreviousClose,
      open: stock.regularMarketOpen,
      high: stock.regularMarketDayHigh,
      low: stock.regularMarketDayLow,
      volume: stock.regularMarketVolume,
      change: stock.regularMarketChange,
      changePercent: stock.regularMarketChangePercent,
      marketState: marketService.mapMarketStatus(stock.marketState),
    }));
  }
  getMarketStatus() {
    const now = new Date();

    const day = now.getDay();

    if (day === 0 || day === 6) {
      return {
        isOpen: false,
        session: "Weekend",
      };
    }

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const marketOpen = 9 * 60 + 15;
    const marketClose = 15 * 60 + 30;

    const isOpen =
      currentMinutes >= marketOpen && currentMinutes <= marketClose;

    return {
      isOpen,
      session: isOpen ? "Open" : "Closed",
    };
  }

  async getIndices() {
    return await marketService.getIndices();
  }

  async getDashboardQuotes() {
    return await marketService.getDashboardQuotes();
  }

  getTopGainers(quotes) {
    return this.mapDashboardStocks(
      this.sortStocks(quotes, "regularMarketChangePercent", "desc").slice(0, 5),
    );
  }

  getTopLosers(quotes) {
    return this.mapDashboardStocks(
      this.sortStocks(quotes, "regularMarketChangePercent", "asc").slice(0, 5),
    );
  }

  getMostActive(quotes) {
    return this.mapDashboardStocks(
      this.sortStocks(quotes, "regularMarketVolume", "desc").slice(0, 5),
    );
  }

  async getHome() {
    const cached = marketCache.get("dashboard");

    if (cached) {
      return cached;
    }

    // Existing Logic Here

    const result = {
      indices,
      marketStatus,
      topGainers,
      topLosers,
      mostActive,
    };

    marketCache.set("dashboard", result, 30000);

    return result;
  }
}

const marketDashboardService = new MarketDashboardService();

export default marketDashboardService;
