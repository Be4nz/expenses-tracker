import { Pie } from "react-chartjs-2";
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
  ArcElement,
} from "chart.js";
import { Transaction } from "../../types/transaction";

interface Props {
  data: Transaction[];
}

const ExpensesPieChart: React.FC<Props> = ({ data }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    ArcElement
  );

  const tagDataMap: { [tag: string]: number } = data.reduce(
    (acc: { [tag: string]: number }, expense) => {
      if (acc[expense.tag]) {
        acc[expense.tag] += expense.amount;
      } else {
        acc[expense.tag] = expense.amount;
      }
      return acc;
    },
    {}
  );

  const chartData = {
    labels: Object.keys(tagDataMap),
    datasets: [
      {
        label: "Spent",
        data: Object.values(tagDataMap),
        borderColor: "rgb(30, 30, 30)",
        backgroundColor: generateRandomColors(Object.keys(tagDataMap).length),
        hoverOffset: 4,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default ExpensesPieChart;

const generateRandomColors = (numColors: number): string[] => {
  const colors: string[] = [];
  const letters = "0123456789ABCDEF";

  for (let i = 0; i < numColors; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }

  return colors;
};
