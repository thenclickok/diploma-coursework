// Code below was readymade

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InvestmentChart = ({ data, timeframe = "yearly" }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const isMonthly = timeframe === "monthly";
  
  // Create labels based on the timeframe whether monthly or yearly
  const labels = data.map((_, index) => {
    if (isMonthly) {
      const date = new Date(currentYear, index);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      return `${year}-${month}`; // Format as "YYYY-MM"
    }
    return String(currentYear + index); // For yearly, just use the year
  });
  
  const investmentValues = data.map((item) => item.investmentValue);
  const investedCapitals = data.map((item) => item.investedCapital);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Total Investment Value',
        data: investmentValues,
        borderColor: '#2e7d32', 
        backgroundColor: 'rgba(46, 125, 50, 0.2)',
        tension: 0.2, // subtle curve
      },
      {
        label: 'Invested Capital',
        data: investedCapitals,
        borderColor: '#1976d2', 
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Investment Growth Over Time',
        font: {
          size: 25, // number only, not 20px
        },
      },
    },
    scales: {
      y: {
        ticks: {
          // Format numbers on the y-axis with commas
          callback: (value) => value.toLocaleString(),
        },
      },
    },
  };

  return (
    <div className="graph">
      <Line data={chartData} options={options}/>
    </div>
  );
};

export default InvestmentChart;