import walletService from "../../wallet/services/wallet.service.js";
import holdingService from "../../holding/services/holding.service.js";
import marketService from "../../market/services/market.service.js";

class PortfolioService {
  async getPortfolio(userId) {
    const wallet = await walletService.getWallet(userId);

    const holdings = await holdingService.getHoldings(userId);

    let investedAmount = 0;
    let currentValue = 0;
    let totalProfit = 0;

    const holdingData = await Promise.all(
      holdings.map(async (holding) => {
        const quote = await marketService.getLiveQuote(holding.stock);

        const currentPrice = quote.price ?? 0;

        const invested = holding.investedAmount;

        const holdingValue = currentPrice * holding.quantity;

        const profit = holdingValue - invested;

        const returnPercent = invested === 0 ? 0 : (profit / invested) * 100;

        investedAmount += invested;
        currentValue += holdingValue;
        totalProfit += profit;

        return {
          stock: holding.stock,

          quantity: holding.quantity,

          averagePrice: holding.averagePrice,

          investedAmount: invested,

          currentPrice,

          currentValue: holdingValue,

          profit,

          returnPercent,
        };
      }),
    );

    return {
      wallet: {
        availableBalance: wallet.availableBalance,
        blockedBalance: wallet.blockedBalance,
      },

      investedAmount,

      currentValue,

      availableCash: wallet.availableBalance,

      totalPortfolioValue: wallet.availableBalance + currentValue,

      totalProfit,

      totalReturn:
        investedAmount === 0 ? 0 : (totalProfit / investedAmount) * 100,

      dayProfit: 0,

      dayReturn: 0,

      totalHoldings: holdingData.length,

      holdings: holdingData,
    };
  }
}

const portfolioService = new PortfolioService();

export default portfolioService;
