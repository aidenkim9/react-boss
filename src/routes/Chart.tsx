import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinJistory } from "../api";
import ApexCharts from "react-apexcharts";

interface chartProps {
  coinId: string;
}
interface ohlcvData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const { coinId } = useOutletContext<chartProps>();
  const { isLoading, data } = useQuery<ohlcvData[]>({
    queryKey: ["ohlcv", coinId],
    queryFn: () => fetchCoinJistory(coinId),
  });

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) ?? [],
            },
          ]}
          options={{
            grid: { show: false },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            theme: {
              mode: "dark",
            },
            chart: {
              background: "inherit",
              toolbar: { show: false },
              height: 300,
              width: 500,
            },
            stroke: { curve: "smooth" },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["blue"],
                stops: [0, 100],
              },
            },
            colors: ["red"],
            tooltip: {
              y: { formatter: (value) => `$${value}` },
            },
          }}
        />
      )}
    </div>
  );
}
export default Chart;
