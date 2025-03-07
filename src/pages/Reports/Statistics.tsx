import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for charts
const monthlyStreamsData = [
  { name: 'Jan', streams: 4000 },
  { name: 'Feb', streams: 3000 },
  { name: 'Mar', streams: 2000 },
  { name: 'Apr', streams: 2780 },
  { name: 'May', streams: 1890 },
  { name: 'Jun', streams: 2390 },
];

const genreDistributionData = [
  { name: 'Pop', value: 400 },
  { name: 'Rock', value: 300 },
  { name: 'Hip-Hop', value: 200 },
  { name: 'Electronic', value: 150 },
  { name: 'Jazz', value: 100 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c'];

const Statistics = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Statistics</h2>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-bold text-gray-700">Total Streams</h3>
          <p className="text-2xl font-semibold text-gray-900">1.2M</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-bold text-gray-700">Active Users</h3>
          <p className="text-2xl font-semibold text-gray-900">45,000</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-bold text-gray-700">Total Songs</h3>
          <p className="text-2xl font-semibold text-gray-900">1,250</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-bold text-gray-700">Total Artists</h3>
          <p className="text-2xl font-semibold text-gray-900">350</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Streams Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Monthly Streams</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyStreamsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="streams" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Genre Distribution Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Genre Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {genreDistributionData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;