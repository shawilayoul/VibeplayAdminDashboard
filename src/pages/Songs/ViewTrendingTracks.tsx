import axios from "axios";
import { useEffect, useState } from "react"
import { FaPlay} from "react-icons/fa";
import { toast } from "react-toastify";
import { MdDeleteForever ,MdEdit} from "react-icons/md";

const ViewTrendingTracks = () => {
  const [allSongs, setAllSongs] = useState([]);


  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get('https://musicserver-uluy.onrender.com/trending-track');
        setAllSongs(response.data)
      } catch (error) {
        console.log('error getting trending tracks', error)
      }
    }
    getUserPlaylist()
  }, [])

  const handleDelete = async(id:string)=>{
    try {
      await axios.delete(`https://musicserver-uluy.onrender.com/trending-track/${id}`);
      setAllSongs((prevSongs) => prevSongs.filter(({id:songId}) => songId !== id));
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
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Trending Tracks</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700">Play</th>
              <th className="py-3 px-4 text-left text-gray-700">Artwork</th>
              <th className="py-3 px-4 text-left text-gray-700">Title</th>
              <th className="py-3 px-4 text-left text-gray-700">Artist</th>
              <th className="py-3 px-4 text-left text-gray-700"></th>
              <th className="py-3 px-4 text-left text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map(({ title, artwork, artist, id,}) => (
              <tr key={id} className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4">
                  <button>
                    <FaPlay className="text-blue-500 cursor-pointer hover:text-blue-700" />
                  </button>
                </td>
                <td className="py-3 px-4">
                  <img
                    src={artwork || imageUrl}
                    alt={`${title} artwork`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-4 text-gray-800">{title}</td>
                <td className="py-3 px-4 text-gray-600">{artist}</td>
                <td  className="text-lg cursor-pointer"><MdEdit/></td>
                <td>< MdDeleteForever className="text-lg text-red-500 cursor-pointer" onClick={()=>handleDelete(id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>)
}

export default ViewTrendingTracks

