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

const BarChart = (props) => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Age Group Bar Chart',
      }      
    },
  };
  
  // const labels = ['0-35 as young adult', '36 to 50 as adult', '51 and above as seniors'];
  const youngAdult = props.datas.filter(data => data.age >= 0 && data.age <= 35).length
  const adult = props.datas.filter(data => data.age >= 36 && data.age <= 50).length
  const seniors = props.datas.filter(data => data.age > 50).length
  const labels = ['Young adult', 'Adult', 'Seniors'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'No of people',
        data: [youngAdult, adult, seniors],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  const noOfMale = props.datas.filter(data => data.gender === 'M').length
  const noOfFemale = props.datas.filter(data => data.gender === 'F').length
  
  return <Bar options={options} data={data} />;
}

export default BarChart
