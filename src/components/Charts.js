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

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Expected Repayment",
        backgroundColor: "#CFEBFC",
        data: [85,25,60,55,33,25,41,39,45,85,85,85],
        borderRadius: 75,
        borderSkipped: false,
        barPercentage: 0.5,
      },
      {
        label: "Actual Repayment",
        backgroundColor: "#109CF1",
        data: [15,59,80,55,29,45,25,63,20,15,15,15],
        borderRadius: 75,
        borderSkipped: false,
        barPercentage: 0.5,
        
      }
    ]
  }

  return (
    <div className="dashboard-charts">
      <div className="bar-chart">
        <div className="bar-chart_header">
          <p>Expected Repayment vs Actual Repayment</p>
        </div>
        <Bar data={barData} /> 
        <div className="bar-chart_footer">
          <p>Expected Repayment - Actual Repayment</p>
        </div>
      </div>
      <div className="doughnut-chart">
        xfgxfhgf
      </div>
    </div>
  )
}

export default Charts;