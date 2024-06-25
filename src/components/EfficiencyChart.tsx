import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { EfficiencyChartProps } from '../interfaces/EfficiencyChartProps';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EfficiencyChart: React.FC<EfficiencyChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(entry => new Date(entry.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: data.map(entry => entry.temperature),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Eficiência (%)',
        data: data.map(entry => entry.efficiency),
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default EfficiencyChart;
