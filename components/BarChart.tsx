'use client';
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

export const BarChart: React.FC<{ data: any }> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)',
          'rgba(83, 102, 255, 0.2)',
          'rgba(253, 126, 20, 0.2)',
          'rgba(61, 174, 87, 0.2)',
          'rgba(218, 112, 214, 0.2)',
          'rgba(255, 140, 0, 0.2)',
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

  return <Bar data={chartData} />;
};
