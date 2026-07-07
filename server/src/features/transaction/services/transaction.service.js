import Transaction from "../../../models/Transaction.model.js";

class TransactionService {
  async create(data, session = null) {
    const [transaction] = await Transaction.create([data], { session });

    return transaction;
  }

  async getTransactions(userId) {
    return await Transaction.find({
      user: userId,
    })
      .populate("order")
      .sort({
        createdAt: -1,
      });
  }
}

const transactionService = new TransactionService();

export default transactionService;
