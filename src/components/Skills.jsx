'use client';

import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Skills = () => {
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 85, 80, 75, 70, 65],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', labels: { color: 'white' } },
      title: {
        display: true,
        text: 'My Skills',
        color: 'white',
        font: { size: 24 },
      },
    },
  };

  return (
    <section id="skills" className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h2 className="text-5xl font-bold text-blue-400 mb-8">My Skills</h2>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className="w-[400px] h-[400px]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="w-[500px] h-[400px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
