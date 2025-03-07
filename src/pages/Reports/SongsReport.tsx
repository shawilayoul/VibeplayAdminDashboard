import React, { useState } from 'react';

// Define the type for a song
interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  streams: number;
  releaseDate: string;
}

// Mock data for songs
const mockSongs: Song[] = [
  { id: 1, title: "Song One", artist: "Artist A", album: "Album X", duration: "3:45", streams: 1200, releaseDate: "2023-01-15" },
  { id: 2, title: "Song Two", artist: "Artist B", album: "Album Y", duration: "4:12", streams: 950, releaseDate: "2023-02-10" },
  { id: 3, title: "Song Three", artist: "Artist C", album: "Album Z", duration: "3:30", streams: 1500, releaseDate: "2023-03-05" },
  { id: 4, title: "Song Four", artist: "Artist D", album: "Album W", duration: "5:00", streams: 800, releaseDate: "2023-04-20" },
  { id: 5, title: "Song Five", artist: "Artist E", album: "Album V", duration: "4:25", streams: 2000, releaseDate: "2023-05-12" },
];

const SongsReport = () => {
  const [songs, setSongs] = useState<Song[]>(mockSongs);
  const [filter, setFilter] = useState<string>('');

  // Handle filter input change
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  // Filter songs based on title, artist, or album
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(filter.toLowerCase()) ||
      song.artist.toLowerCase().includes(filter.toLowerCase()) ||
      song.album.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Songs Report</h2>

      {/* Filter Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, artist, or album..."
          value={filter}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Songs Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artist</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Album</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Streams</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Release Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredSongs.map((song) => (
              <tr key={song.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{song.title}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{song.artist}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{song.album}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{song.duration}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{song.streams}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{song.releaseDate}</td>
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

export default SongsReport;