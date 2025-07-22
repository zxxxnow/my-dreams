import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip);

function Charts() {
  const dataWealth = {
    labels: [1950, 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
    datasets: [
      { label: 'VIP (Top 1%)', data: [28, 27, 29, 30, 31, 32, 34, 36, 37, 39, 40, 42, 43, 44, 45], borderColor: 'rgb(255, 99, 132)', fill: false, tension: 0.3 },
      { label: 'Middle Class (Next 9%)', data: [42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28], borderColor: 'rgb(54, 162, 235)', fill: false, tension: 0.3 },
      { label: 'Poor (Bottom 90%)', data: [30, 32, 31, 31, 31, 31, 30, 29, 29, 28, 28, 27, 27, 27, 27], borderColor: 'rgb(75, 192, 192)', fill: false, tension: 0.3 },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
      y: { ticks: { color: 'white' }, grid: { color: 'rgba(255,255,255,0.1)' } },
    },
  };

  const resourceShare = {
    labels: ['VIP (Top 1%)', 'Middle Class (Next 9%)', 'Poor (Bottom 90%)'],
    datasets: [
      {
        data: [45, 28, 27],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(75, 192, 192)'],
        borderColor: ['#222', '#222', '#222'],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-10">
      <h1 className="text-2xl text-center font-bold mb-6">Just Some Charts</h1>

      {/* Line Chart Section */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6">
        
        {/* Chart */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Wealth Share Over Time</h3>
          <Line data={dataWealth} options={options} />
          
          {/* Podium Text */}
        </div>

        {/* Manual Legend Inside Box */}
        <div className="w-full md:w-64 bg-gray-800 p-4 rounded-lg text-left flex flex-col">
          <h4 className="font-bold mb-2">Legend:</h4>
          <ul className="space-y-2">
            <li><span className="inline-block w-4 h-4 bg-pink-500 mr-2"></span> VIP (Top 1%)</li>
            <li><span className="inline-block w-4 h-4 bg-blue-400 mr-2"></span> Middle Class (Next 9%)</li>
            <li><span className="inline-block w-4 h-4 bg-teal-400 mr-2"></span> Poor (Bottom 90%)</li>
            <p className="mt-4 text-sm text-gray-300">
            This chart shows the evolving share of total wealth held by the Top 1% (VIP), Next 9% (Middle Class), and Bottom 90% (Poor) from 1950 to 2020.
            </p>
          </ul>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6">
  
        {/* Manual Legend Inside Box */}
        <div className="w-full md:w-64 bg-gray-800 p-4 rounded-lg text-left flex flex-col">
          <h4 className="font-bold mb-2">Legend:</h4>
          <ul className="space-y-2">
            <li><span className="inline-block w-4 h-4 bg-pink-500 mr-2"></span> VIP (Top 1%)</li>
            <li><span className="inline-block w-4 h-4 bg-blue-400 mr-2"></span> Middle Class (Next 9%)</li>
            <li><span className="inline-block w-4 h-4 bg-teal-400 mr-2"></span> Poor (Bottom 90%)</li>
          </ul>
          <p className="mt-4 text-sm text-gray-300">
            This pie chart represents the estimated distribution of global resources by social group for the year 2020. It reflects economic inequality at a static point in time.
          </p>
        </div>

        {/* Chart */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Resource Share (2020 Snapshot)</h3>
          <div className="w-full max-w-xs">
            <Pie data={resourceShare} options={pieOptions} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Charts;
