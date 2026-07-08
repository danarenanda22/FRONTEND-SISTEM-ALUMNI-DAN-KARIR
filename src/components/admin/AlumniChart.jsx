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

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AlumniChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
    ],

    datasets: [
      {
        label: "Jumlah Alumni",

        data: [10, 30, 45, 50, 75, 100],

        borderColor: "#2563eb",

        backgroundColor: "#2563eb",

        tension: .4,
      },
    ],
  };

  return (
    <div className="card shadow-sm border-0 mt-4">

      <div className="card-body">

        <h5 className="mb-3">
          Grafik Alumni
        </h5>

        <Line data={data} />

      </div>

    </div>
  );
}

export default AlumniChart;