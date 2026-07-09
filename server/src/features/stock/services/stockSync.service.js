import { Readable } from "stream";
import csv from "csv-parser";
import unzipper from "unzipper";

import Stock from "../../../models/Stock.model.js";

import { nseProvider, bseProvider } from "../../../providers/index.js";

import nseParser from "../../../providers/nse/nse.parser.js";
import bseParser from "../../../providers/bse/bse.parser.js";

class StockSyncService {
  async sync() {
    const nseStocks = await this.syncNSE();

    const bseStocks = await this.syncBSE();

    const stocks = this.mergeStocks(
      nseStocks,

      bseStocks,
    );

    const result = await this.bulkUpsert(stocks);

    await this.deactivateRemovedStocks(
      stocks.map((stock) => stock.yahooSymbol),
    );

    return result;
  }

  async syncNSE() {}

  async syncBSE() {}

  async parseCSV(buffer) {
    const records = [];

    return new Promise((resolve, reject) => {
      Readable.from(buffer)
        .pipe(csv())

        .on("data", (row) => {
          records.push(row);
        })

        .on("end", () => {
          resolve(records);
        })

        .on("error", reject);
    });
  }

  async extractCSV(zipBuffer) {
    const directory = await unzipper.Open.buffer(zipBuffer);

    const file = directory.files.find((file) => file.path.endsWith(".csv"));

    if (!file) {
      throw new Error("CSV not found.");
    }

    return await file.buffer();
  }

  mergeStocks(nseStocks, bseStocks) {
    const map = new Map();

    [...nseStocks, ...bseStocks].forEach((stock) => {
      map.set(stock.yahooSymbol, stock);
    });

    return [...map.values()];
  }

  async bulkUpsert(stocks) {
    const operations = stocks.map((stock) => ({
      updateOne: {
        filter: {
          yahooSymbol: stock.yahooSymbol,
        },

        update: {
          $set: stock,
        },

        upsert: true,
      },
    }));

    const result = await Stock.bulkWrite(
      operations,

      {
        ordered: false,
      },
    );

    return result;
  }

  async deactivateRemovedStocks(activeSymbols) {
    await Stock.updateMany(
      {
        yahooSymbol: {
          $nin: activeSymbols,
        },
      },

      {
        $set: {
          isActive: false,

          isDelisted: true,
        },
      },
    );
  }
}

const stockSyncService = new StockSyncService();

export default stockSyncService;
