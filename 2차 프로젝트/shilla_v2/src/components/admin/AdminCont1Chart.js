import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["2017", "2018", "2019", "2020", "2021", "2022", "2023"];

const options = {
  responsive: true,
  interaction: {
    intersect: true,
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
    },
    y: {
        beginAtZero: {
            display: true,
        },
    }
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "React",
      data: [32, 42, 51, 60, 51, 95, 97],
      backgroundColor: "#0CD3FF",
      borderColor: "#0CD3FF",
    },
    {
      label: "Angular",
      data: [37, 42, 41, 37, 31, 44, 42],
      backgroundColor: "#a6120d",
      borderColor: "#a6120d",
    },
    {
      label: "Vue",
      data: [60, 54, 54, 28, 27, 49, 52],
      backgroundColor: "#FFCA29",
      borderColor: "#FFCA29",
    },
  ],
};

const Chart1 = () => {
  return (
    <div>
      <h1>방문자 현황</h1>
        <Line options={options} data={data} />
    </div>
  );
};

export default Chart1;