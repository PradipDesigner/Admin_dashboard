import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueGoalChart = ({ goalPercentage }) => {
  const data = {
    labels: ["Achieved", "Remaining"],
    datasets: [
      {
        data: [goalPercentage, 100 - goalPercentage],
        backgroundColor: ["#7095ff", "#29326b"],
        // borderWidth: 1,
        // borderRadius: 50,
        borderColor: "transparent",
      },
    ],
  };

  const options = {
    cutout: "85%",
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <div className="d-flex">
        <div className="">
          <small className="fw-bold" style={{fontSize: '12px'}}>Net Profit</small>
          <h5 className="fw-bold mt-2 mb-0">$6759.25</h5>
          <small className="text-success fw-bold">
            <i className="bi bi-caret-up-fill"></i> 3%
          </small>
        </div>
        <div className="doughnutChart">
          <Doughnut data={data} options={options} />
          <div className="doughnutChart-text">
            <h6
              className="text-center"
              style={{ marginBottom: "4px" }}
            >{`${goalPercentage}%`}</h6>
            <span>Goal Completed</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RevenueGoalChart;
