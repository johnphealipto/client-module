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
import { FaDotCircle } from 'react-icons/fa';

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

  const barOptions = {
    plugins: {
      legend: false,
    }
  }

  return (
    <div className="dashboard-charts">
      <div className="bar-chart">
        <div className="bar-chart_header">
          <p>Expected Repayment vs Actual Repayment</p>
          <div className="bar-select">
            <select>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
            <select>
              <option value="Nationwide">Nationwide</option>
              <option value="Local">Local</option>
              <option value="Geo-region">Geo-region</option>
            </select>
          </div>
        </div>
        <Bar 
          data={barData}
          options={barOptions} /> 
        <div className="bar-chart_footer">
          <div><FaDotCircle size={14} /> <span>Expected Repayment</span></div>
          <div><FaDotCircle size={14} /> <span>Actual Repayment</span></div>
        </div>
      </div>
      <div className="doughnut-chart">
        Loan Status
      </div>
    </div>
  )
}

export default Charts;