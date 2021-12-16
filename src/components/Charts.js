import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {

  const barConfig = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Expected Repayment",
        backgroundColor: "#CFEBFC",
        data: [3,7,4]
      },
      {
        label: "Actual Repayment",
        backgroundColor: "#109CF1",
        data: [4,3,5]
      }
    ]
  }

  return (
    <div className="dashboard-charts">
      <Bar data={barConfig} /> 
    </div>
  )
}

export default Charts;