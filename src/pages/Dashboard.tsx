// Define the expected types for the props
interface CardProps {
  title: string;
  value: string | number;  // `value` can be either a string or a number
}

const Card: React.FC<CardProps> = ({ title, value }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
};


const Dashboard = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Total Songs" value="1,250" />
        <Card title="Total Artists" value="350" />
        <Card title="Total Playlists" value="180" />
      </div>
    </div>
  )
}

export default Dashboard