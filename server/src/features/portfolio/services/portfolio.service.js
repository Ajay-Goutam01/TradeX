import walletService from "../../wallet/services/wallet.service.js";
import holdingService from "../../holding/services/holding.service.js";
import marketService from "../../market/services/market.service.js";

class PortfolioService {
  async getPortfolio(userId) {
    const wallet = await walletService.getWallet(userId);

    const holdings = await holdingService.getHoldings(userId);

    let invested = 0;

    let currentValue = 0;

    let totalProfit = 0;

    const holdingData = [];
    for (const holding of holdings) {
      const quote = await marketService.getLiveQuote(holding.stock);

      const currentPrice = quote.price;

      const investedAmount = holding.investedAmount;

      const currentHoldingValue = currentPrice * holding.quantity;

      const profit = currentHoldingValue - investedAmount;

      const returnPercent =
        investedAmount === 0 ? 0 : (profit / investedAmount) * 100;
      invested += investedAmount;

      currentValue += currentHoldingValue;

      totalProfit += profit;
      holdingData.push({
        stock: holding.stock,

        quantity: holding.quantity,

        averagePrice: holding.averagePrice,

        investedAmount,

        currentPrice,

        currentValue: currentHoldingValue,

        profit,

        returnPercent,
      });
    }
    return {
      wallet: {
        availableBalance: wallet.availableBalance,
        blockedBalance: wallet.blockedBalance,
      },

      investedAmount: invested,

      currentValue,

      totalPortfolioValue: currentValue + wallet.availableBalance,

      availableCash: wallet.availableBalance,

      totalProfit,

      totalReturn: invested === 0 ? 0 : (totalProfit / invested) * 100,

      dayProfit: 0,

      dayReturn: 0,

      totalHoldings: holdings.length,

      holdings: holdingsData,
    };
  }
}

const portfolioService = new PortfolioService();

export default portfolioService;
