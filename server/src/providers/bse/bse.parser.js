class BSEParser {
  parse(records = []) {
    return records.map((stock) => ({
      symbol: stock.symbol,
      companyName: stock.companyName,
      exchange: "BSE",
      isin: stock.isin,
      yahooSymbol: `${stock.symbol}.BO`,
    }));
  }
}

const bseParser = new BSEParser();

export default bseParser;
