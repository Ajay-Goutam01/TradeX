import marketService from "./market.service.js";

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
    const [indices, quotes] = await Promise.all([
      this.getIndices(),
      this.getDashboardQuotes(),
    ]);

   

    const gainers = this.getTopGainers(quotes);


    const losers = this.getTopLosers(quotes);
  

    const active = this.getMostActive(quotes);
   

    return {
      marketStatus: this.getMarketStatus(),
      indices,
      topGainers: gainers,
      topLosers: losers,
      mostActive: active,
    };
  }
}

const marketDashboardService = new MarketDashboardService();

export default marketDashboardService;
