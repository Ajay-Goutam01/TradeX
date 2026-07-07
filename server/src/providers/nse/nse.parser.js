class NSEParser {
  parse(records = []) {
    return records.map((stock) => ({
      symbol: stock.symbol,
      companyName: stock.companyName,
      exchange: "NSE",
      isin: stock.isin,
      yahooSymbol: `${stock.symbol}.NS`,
    }));
  }
}

const nseParser = new NSEParser();

export default nseParser;
