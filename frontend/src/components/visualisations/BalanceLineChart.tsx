import { Line } from "react-chartjs-2";
import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarElement,
  LineElement,
} from "chart.js";

interface Props {
  data: { amount: number; date?: Date }[];
}

const BalanceLineChart: React.FC<Props> = ({ data }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController
  );

  const chartData = {
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: "Balance",
        data: data.map((expense) => expense.amount),
        borderColor: "rgb(204, 204, 204)",
        backgroundColor: "rgb(204, 204, 204)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide x-axis labels
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default BalanceLineChart;
