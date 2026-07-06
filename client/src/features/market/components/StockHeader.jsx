function StockHeader({ stock }) {

    if (!stock) return null;

    return (

        <div className="rounded-3xl bg-white p-8 shadow-sm">

            <h1 className="text-4xl font-bold">

                {stock.name}

            </h1>

            <p className="mt-2 text-slate-500">

                {stock.symbol}

            </p>

        </div>

    );

}

export default StockHeader;