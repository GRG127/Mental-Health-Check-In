import React from 'react';
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
import { useMood } from '../../context/MoodContext';
import { format, subDays } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const MoodTrends: React.FC = () => {
  const { state } = useMood();

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), i);
    return format(date, 'MMM d');
  }).reverse();

  const intensityData = last7Days.map((day) => {
    const entry = state.entries.find(
      (e) => format(e.date, 'MMM d') === day
    );
    return entry?.intensity || null;
  });

  const data = {
    labels: last7Days,
    datasets: [
      {
        label: 'Mood Intensity',
        data: intensityData,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Mood Intensity Trend (Last 7 Days)',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <Line data={data} options={options} />
    </div>
  );
};