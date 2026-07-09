import fs from "fs";
import path from "path";
import csv from "csv-parser";

import Stock from "../../src/models/Stock.model.js";

class StockSeeder {
  async readCSV(filePath) {
    const rows = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => rows.push(row))
        .on("end", () => resolve(rows))
        .on("error", reject);
    });
  }

  normalize(rows) {
    return rows
      .map((row) => {
        const cleanRow = {};

        Object.keys(row).forEach((key) => {
          cleanRow[key.trim()] =
            typeof row[key] === "string" ? row[key].trim() : row[key];
        });

        return cleanRow;
      })
      .filter(
        (row) => row.SYMBOL && row["NAME OF COMPANY"] && row.SERIES === "EQ",
      )
      .map((row) => {
        const symbol = row.SYMBOL.trim();
        const companyName = row["NAME OF COMPANY"].trim();

        return {
          symbol,

          tradingSymbol: symbol,

          companyName,

          displayName: companyName,

          slug: companyName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, ""),

          isin: row["ISIN NUMBER"] || null,

          exchange: "NSE",

          segment: "CASH",

          instrumentType: "EQUITY",

          series: row.SERIES,

          listingDate: row["DATE OF LISTING"]
            ? new Date(row["DATE OF LISTING"])
            : null,

          faceValue: Number(row["FACE VALUE"]) || null,

          lotSize: Number(row["MARKET LOT"]) || 1,

          yahooSymbol:
            row.YahooEquiv ||
            row.Yahoo_Equivalent_Code?.replace(/['",]/g, "") ||
            `${symbol}.NS`,

          currency: "INR",

          country: "India",

          searchKeywords: [symbol, companyName, companyName.toLowerCase()],

          isActive: true,

          isDelisted: false,

          lastSyncedAt: new Date(),

          metadata: {},
        };
      });
  }

  async bulkInsert(stocks) {
    const operations = stocks.map((stock) => ({
      updateOne: {
        filter: {
          exchange: stock.exchange,
          symbol: stock.symbol,
        },
        update: {
          $set: stock,
        },
        upsert: true,
      },
    }));

    console.log(`🚀 Bulk Operations : ${operations.length}`);

    const result = await Stock.bulkWrite(operations, {
      ordered: false,
    });

    console.log("\n========== BULK RESULT ==========");
    console.log(`Matched   : ${result.matchedCount}`);
    console.log(`Modified  : ${result.modifiedCount}`);
    console.log(`Upserted  : ${result.upsertedCount}`);
    console.log(`Inserted  : ${result.insertedCount}`);
    console.log("=================================\n");

    return result;
  }

  async seed() {
    const csvPath = path.join(
      process.cwd(),
      "seed",
      "stocks",
      "nse_master.csv",
    );

    console.log("📄 Reading CSV...");

    const rows = await this.readCSV(csvPath);

    console.log(`📦 ${rows.length} rows loaded`);

    const stocks = this.normalize(rows);

    console.log(`✅ ${stocks.length} stocks normalized`);

    console.log(stocks[0]);

    await this.bulkInsert(stocks);

    console.log("🎉 Stock Seeding Completed");
  }
}

export default new StockSeeder();
