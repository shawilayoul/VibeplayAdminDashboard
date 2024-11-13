import axios from "axios";
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";



const SongDetail = () => {
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get('https://musicserver-uluy.onrender.com/track');
        setAllSongs(response.data)
      } catch (error) {
        console.log('error getting user platlist', error)
      }
    }
    getUserPlaylist()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://musicserver-uluy.onrender.com/track/${id}`);
      setAllSongs((prevSongs) => prevSongs.filter(({ id: songId }) => songId !== id));
      toast.success('Track deleted successfully!')
    } catch (error) {
      toast.error('Error deleting Track')
      console.log('error deleting track', error)
    }
  }
  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIN6iFDbA-lmBLINiQlt8dSO5qWkqWx003dhJXZN81Sx3HqHCq6yTSC4ZlyBzqeSoGCno&usqp=CAU';

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">All Worship Tracks</h2>

      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full border-separate border-spacing-0">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700">Play</th>
              <th className="py-3 px-6 text-left text-gray-700">Artwork</th>
              <th className="py-3 px-6 text-left text-gray-700">Title</th>
              <th className="py-3 px-6 text-left text-gray-700">Artist</th>
              <th className="py-3 px-6 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map(({ title, artwork, artist, id }) => (
              <tr key={id} className="hover:bg-gray-100 transition-colors">
                {/* Play Button */}
                <td className="py-3 px-6">
                  <button>
                    <FaPlay className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
                  </button>
                </td>

                {/* Artwork */}
                <td className="py-3 px-6">
                  <img
                    src={artwork || imageUrl}
                    alt={`${title} artwork`}
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                </td>

                {/* Title */}
                <td className="py-3 px-6 text-gray-800">{title}</td>

                {/* Artist */}
                <td className="py-3 px-6 text-gray-600">{artist}</td>

                {/* Action Buttons */}
                <td className="py-3 px-6 text-center">
                  <div className="flex justify-center gap-4">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      aria-label="Edit"
                    >
                      <MdEdit className="text-xl" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      aria-label="Delete"
                      onClick={() => handleDelete(id)}
                    >
                      <MdDeleteForever className="text-xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SongDetail

