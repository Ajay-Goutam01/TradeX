import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

function LightweightChart({ candles = [] }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.innerHTML = "";

    const chart = createChart(chartRef.current, {
      width: chartRef.current.clientWidth,
      height: 500,

      layout: {
        background: {
          color: "#ffffff",
        },
        textColor: "#334155",
      },

      grid: {
        vertLines: {
          color: "#f1f5f9",
        },
        horzLines: {
          color: "#f1f5f9",
        },
      },

      rightPriceScale: {
        borderColor: "#e2e8f0",
      },

      timeScale: {
        borderColor: "#e2e8f0",
        timeVisible: true,
      },

      crosshair: {
        mode: 1,
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#16a34a",
      downColor: "#dc2626",
      borderUpColor: "#16a34a",
      borderDownColor: "#dc2626",
      wickUpColor: "#16a34a",
      wickDownColor: "#dc2626",
    });

    const chartData = candles
      .filter(
        (item) =>
          item?.date &&
          item.open != null &&
          item.high != null &&
          item.low != null &&
          item.close != null,
      )
      .map((item) => ({
        time: Math.floor(new Date(item.date).getTime() / 1000),
        open: Number(item.open),
        high: Number(item.high),
        low: Number(item.low),
        close: Number(item.close),
      }));

    console.log("Candles =>", candles);
    console.log("Chart Data =>", chartData);

    candleSeries.setData(chartData);

    chart.timeScale().fitContent();

    const handleResize = () => {
      if (!chartRef.current) return;

      chart.applyOptions({
        width: chartRef.current.clientWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [candles]);

  return <div ref={chartRef} className="h-[500px] w-full" />;
}

export default LightweightChart;
