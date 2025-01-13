import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Reliability = ({ metrics }) => {
  if (!metrics || !metrics.graphData) {
    return null; // Render nothing if metrics or graphData is unavailable
  }

  return (
    <>
      <div className="metrics">
        <h2>Reliability Metrics</h2>
        <div className="r">
          <div className="r_1">
            <p>
              <strong>MTBF:</strong> {metrics.MTBF}
            </p>
            <p>
              <strong>MTTF:</strong> {metrics.MTTF}
            </p>
          </div>
          <div className="r_2">
            <p>
              <strong>MTTR:</strong>  5 hours
            </p>

            <p>
              <strong>Availability:</strong> {metrics.Availability}
            </p>
          </div>
          <div className="r_3">
            <p>
              <strong>Failure Rate:</strong> {metrics.failureRate}
            </p>
            <p>
              <strong>Downtime:</strong> {metrics.Downtime}
            </p>
            <p>
              <strong>Reliability:</strong> {metrics.Reliability}
            </p>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <Bar data={metrics.graphData} />
      </div>
    </>
  );
};

export default Reliability;
