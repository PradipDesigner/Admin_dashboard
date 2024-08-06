import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import "chart.js/auto";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ActivityChart = () => {
  const [filter, setFilter] = useState("weekly");

  const getData = (filter) => {
    switch (filter) {
      case "weekly":
        return {
          labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: "Activity",
              data: [5000, 6000, 8000, 7000, 12000, 15000, 9000],
              backgroundColor: "#7095ff",
              borderRadius: 20,
            },
          ],
        };
      case "monthly":
        return {
          labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
          datasets: [
            {
              label: "Activity",
              data: Array.from({ length: 30 }, () =>
                Math.floor(Math.random() * 15000)
              ),
              backgroundColor: "#36A2EB",
              borderRadius: 10,
            },
          ],
        };
      case "yearly":
        return {
          labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
          datasets: [
            {
              label: "Activity",
              data: Array.from({ length: 12 }, () =>
                Math.floor(Math.random() * 15000)
              ),
              backgroundColor: "#36A2EB",
              borderRadius: 10,
            },
          ],
        };
      default:
        return {};
    }
  };

  const data = getData(filter);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 15000,
        ticks: {
          stepSize: 5000,
        },
      },
    },
  };

  return (
    <div>
      <div className="d-flex justify-content-between mb-2 mb-md-3">
        <h6 className="card-header-title">Activity</h6>
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
