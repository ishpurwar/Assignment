import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Pie Chart',
        data: data.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',   // January
          'rgba(54, 162, 235, 0.2)',   // February
          'rgba(255, 206, 86, 0.2)',   // March
          'rgba(75, 192, 192, 0.2)',   // April
          'rgba(153, 102, 255, 0.2)',  // May
          'rgba(255, 159, 64, 0.2)',   // June
          'rgba(199, 199, 199, 0.2)',  // July
          'rgba(83, 102, 255, 0.2)',   // August
          'rgba(253, 126, 20, 0.2)',   // September
          'rgba(61, 174, 87, 0.2)',    // October
          'rgba(218, 112, 214, 0.2)',  // November
          'rgba(255, 140, 0, 0.2)',    // December
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
          'rgba(83, 102, 255, 1)',
          'rgba(253, 126, 20, 1)',
          'rgba(61, 174, 87, 1)',
          'rgba(218, 112, 214, 1)',
          'rgba(255, 140, 0, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};


