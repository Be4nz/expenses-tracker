import { Bar, Line } from "react-chartjs-2";
import { Transaction } from "../../types/transaction";
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
  data: Transaction[];
}

const BarChart: React.FC<Props> = ({ data }) => {
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

  let expenseData = data.filter((data) => data.type === "EXPENSE");
  let incomeData = data.filter((data) => data.type === "INCOME");

  const chartData = {
    labels: expenseData.map((expense) => expense.date),
    datasets: [
      {
        label: "Expenses",
        data: expenseData.map((expense) => expense.amount),
        borderColor: "#b84f4f",
        backgroundColor: "#b84f4f",
      },
      {
        label: "Incomes",
        data: incomeData.map((expense) => expense.amount),
        borderColor: "#72c675",
        backgroundColor: "#72c675",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default BarChart;
