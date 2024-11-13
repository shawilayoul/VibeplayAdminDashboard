import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Artists = () => {
  const [artsits,setArtists] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const getUserPlaylist = async () => {
      try {
        const response = await axios.get('https://musicserver-uluy.onrender.com/artists');
        setArtists(response.data)
      } catch (error) {
        console.log('error getting user platlist', error)
      }
    }
    getUserPlaylist()
  }, [])

  return (
    <div className="p-4 bg-white min-h-screen ">
      <h2 className="text-xl font-bold mb-4 text-gray-900 text-center border-b-2 pb-2">All Artist</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {artsits.map(({ name,bio, id }) => (
          <div
            key={id}
            className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => navigate(`/artists/view/${id}`)}
          >
            <img
              src={bio}
              alt={`${name} artwork`}
              className="w-full h-40  object-cover transition-transform duration-200 hover:scale-105"
            />
            <div className="flex flex-col items-center p-3">
              <h3 className="text-lg font-semibold text-white uppercase">{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Artists