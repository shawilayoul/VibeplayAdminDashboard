import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Define the expected types for the props
interface CardProps {
  title: string;
  value: string | number;  // `value` can be either a string or a number
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-bold text-gray-700">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
};

// Mock data for charts
const songStreamsData = [
  { name: 'Jan', streams: 4000 },
  { name: 'Feb', streams: 3000 },
  { name: 'Mar', streams: 2000 },
  { name: 'Apr', streams: 2780 },
  { name: 'May', streams: 1890 },
  { name: 'Jun', streams: 2390 },
];

const artistPopularityData = [
  { name: 'Artist A', popularity: 400 },
  { name: 'Artist B', popularity: 300 },
  { name: 'Artist C', popularity: 200 },
  { name: 'Artist D', popularity: 278 },
  { name: 'Artist E', popularity: 189 },
  { name: 'Artist F', popularity: 239 },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Overview</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card title="Total Songs" value="1,250" />
        <Card title="Total Artists" value="350" />
        <Card title="Total Playlists" value="180" />
        <Card title="Monthly Streams" value="1.2M" />
        <Card title="Active Users" value="45,000" />
        <Card title="Revenue" value="$12,500" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Song Streams Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Monthly Song Streams</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={songStreamsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="streams" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Artist Popularity Chart */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Artist Popularity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={artistPopularityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="popularity" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;