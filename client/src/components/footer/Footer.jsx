function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-xl font-bold text-blue-600">StockTrade</h2>

          <p className="mt-2 text-sm text-slate-500">
            Modern Paper Trading Platform
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 TradeX. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
