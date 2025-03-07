// Define the type for a trending item
interface TrendingItem {
  id: number;
  title: string;
  artist: string;
  coverImage: string;
  streams: number;
  releaseDate: string;
}

// Mock data for trending items
const mockTrendingItems: TrendingItem[] = [
  { id: 1, title: "Song One", artist: "Artist A", coverImage: "https://via.placeholder.com/50", streams: 1200, releaseDate: "2023-01-15" },
  { id: 2, title: "Song Two", artist: "Artist B", coverImage: "https://via.placeholder.com/50", streams: 950, releaseDate: "2023-02-10" },
  { id: 3, title: "Song Three", artist: "Artist C", coverImage: "https://via.placeholder.com/50", streams: 1500, releaseDate: "2023-03-05" },
  { id: 4, title: "Song Four", artist: "Artist D", coverImage: "https://via.placeholder.com/50", streams: 800, releaseDate: "2023-04-20" },
  { id: 5, title: "Song Five", artist: "Artist E", coverImage: "https://via.placeholder.com/50", streams: 2000, releaseDate: "2023-05-12" },
];

const Trending = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Trending</h2>

      {/* Trending List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cover</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artist</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Streams</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Release Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockTrendingItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <img src={item.coverImage} alt={item.title} className="w-10 h-10 rounded-full" />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.title}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.artist}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.streams}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (Optional) */}
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Trending;