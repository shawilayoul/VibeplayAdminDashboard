import axios from "axios";
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MdDeleteForever ,MdEdit} from "react-icons/md";

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  artwork: string;
}

const ViewPlaylist = () => {
  const [allSongs, setAllSongs] = useState<Track[]>([]);
  const { id } = useParams()

  //console.log(allSongs?.tracks)

  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get(`https://musicserver-uluy.onrender.com/artists/artistTracks/${id}`);
        setAllSongs(response.data.artistTracks)
      } catch (error) {
        console.log('error getting user platlist', error)
      }
    }
    getUserPlaylist()
  }, [id])


  const handleDelete = async(id:string)=>{
    try {
      await axios.delete(`https://musicserver-uluy.onrender.com/artists/artistTracks/${id}`);
      setAllSongs((prevSongs) => prevSongs.filter(({id:songId}) => songId !== id));
      toast.success('Track deleted successfully!')
    } catch (error) {
      toast.error('Error deleting Track')
      console.log('error deleting track', error)
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg ">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">All Artist Tracks</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left">Play</th>
              <th className="py-3 px-4 text-left">Artwork</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Artist</th>
              <th className="py-3 px-4 text-left text-gray-700"></th>
              <th className="py-3 px-4 text-left text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {allSongs.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 transition-colors">
                <td className="py-3 px-4 text-center cursor-pointer">
                  <FaPlay className="text-blue-600 hover:text-blue-800" />
                </td>
                <td className="py-3 px-4">
                  <img
                    src={item.artwork}
                    alt={`${item.title} artwork`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="py-3 px-4 text-gray-800">{item.title}</td>
                <td className="py-3 px-4 text-gray-600">{item.artist}</td>
                <td  className="text-lg cursor-pointer"><MdEdit/></td>
                <td>< MdDeleteForever className="text-lg text-red-500 cursor-pointer" onClick={()=>handleDelete(item.id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewPlaylist



