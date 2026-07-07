import Wallet from "../../../models/Wallet.model.js";
import Transaction from "../../../models/Transaction.model.js";
import { ApiError } from "../../../core/index.js";

class WalletService {
  async createWallet(userId, session = null) {
    const [wallet] = await Wallet.create(
      [
        {
          user: userId,
        },
      ],
      { session },
    );

    return wallet;
  }

  async getWallet(userId) {
    const wallet = await Wallet.findOne({
      user: userId,
      isActive: true,
    });

    if (!wallet) {
      throw new ApiError(404, "Wallet not found.");
    }

    return wallet;
  }

  async validateBalance(userId, amount, session = null) {
    const wallet = await Wallet.findOne({
      user: userId,
      isActive: true,
    }).session(session);

    if (!wallet) {
      throw new ApiError(404, "Wallet not found.");
    }

    if (wallet.availableBalance < amount) {
      throw new ApiError(400, "Insufficient balance.");
    }

    return wallet;
  }

  async debitBalance(
    userId,
    amount,
    description,
    orderId = null,
    type = "BUY",
    session = null,
    metadata = {},
  ) {
    const wallet = await this.validateBalance(userId, amount, session);

    const before = wallet.availableBalance;
    const after = before - amount;

    wallet.availableBalance = after;

    await wallet.save({ session });

    await Transaction.create(
      [
        {
          user: userId,
          order: orderId,
          type,
          amount: -amount,
          balanceBefore: before,
          balanceAfter: after,
          description,

          ...metadata,
        },
      ],
      { session },
    );

    return wallet;
  }

  async creditBalance(
    userId,

    amount,

    description,

    orderId = null,

    type = "SELL",

    session = null,

    metadata = {},
  ) {
    const wallet = await Wallet.findOne({
      user: userId,
      isActive: true,
    }).session(session);

    if (!wallet) {
      throw new ApiError(404, "Wallet not found.");
    }

    const before = wallet.availableBalance;
    const after = before + amount;

    wallet.availableBalance = after;

    await wallet.save({ session });

    await Transaction.create(
      [
        {
          user: userId,
          order: orderId,
          type,
          amount,
          balanceBefore: before,
          balanceAfter: after,
          description,

          ...metadata,
        },
      ],
      { session },
    );

    return wallet;
  }

  async resetWallet(userId, session = null) {
    const wallet = await Wallet.findOne({
      user: userId,
    }).session(session);

    if (!wallet) {
      throw new ApiError(404, "Wallet not found.");
    }

    const before = wallet.availableBalance;

    wallet.availableBalance = 1000000;
    // wallet.investedAmount = 0;
    wallet.blockedBalance = 0;

    await wallet.save({ session });

    await Transaction.create(
      [
        {
          user: userId,
          type: "RESET",
          amount: 1000000,
          balanceBefore: before,
          balanceAfter: 1000000,
          description: "Paper trading wallet reset.",
        },
      ],
      { session },
    );

    return wallet;
  }
}

const walletService = new WalletService();

export default walletService;
