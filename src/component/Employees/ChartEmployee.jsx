import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Completed',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
      ],
      borderColor: [
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
        '#007bff',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min : 0,
          stepSize : 5
        },
      },
    ],
  }
};

const VerticalBar = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar;