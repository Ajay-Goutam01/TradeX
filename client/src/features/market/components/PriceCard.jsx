function PriceCard({ stock }) {

    if (!stock) return null;

    const positive = stock.changePercent >= 0;

    return (

        <div className="rounded-3xl bg-white p-8 shadow-sm">

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-5xl font-bold">

                        ₹ {stock.price}

                    </h2>

                    <p
                        className={`mt-4 font-semibold ${
                            positive
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                    >

                        {stock.changePercent?.toFixed(2)}%

                    </p>

                </div>

                <div className="flex gap-4">

                    <button
                        className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
                    >

                        BUY

                    </button>

                    <button
                        className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700"
                    >

                        SELL

                    </button>

                </div>

            </div>

        </div>

    );

}

export default PriceCard;