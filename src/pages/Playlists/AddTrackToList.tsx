import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';


interface Playlist {
  id: string;
  title: string;
}
const AddTrackToPlaylist = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [artwork, setArtwork] = useState<File | null>(null)
  const [url, setUrl] = useState<File | null>(null)
  const [playlistId, setPlaylistId] = useState('')

  useEffect(() => {
    getAllPlaylist()
  }, [])
  //get alll podcasts
  const getAllPlaylist = async () => {
    try {
      const response = await axios.get('https://musicserver-uluy.onrender.com/playlist');
      setPlaylists(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('playlistId', playlistId);
    if (url) formData.append('files', url); // Assuming `url` is a file input
    if (artwork) formData.append('files', artwork);

    // Assuming `artwork` is also a file input
    try {
      await axios.post('https://musicserver-uluy.onrender.com/play-list-track', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      toast.success('Track Added To the  playlist successfully')
      setTitle("")
      setArtist("")
      setPlaylistId("")
      setArtwork(null)
      setUrl(null)
    } catch (error) {
      console.error('Error details:', error);// Log response data for more context
      toast.error('Failed to add song: please try again');
    }
  }
  return (
    <div className="flex items-center justify-center flex-col p-4 mt-6 gap-4 w-full">
      <h2 className="text-2xl font-medium">Add Track To Playlist</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md w-full max-w-[600px] p-4 flex flex-col items-start gap-4 rounded-md"
      >
        {/* Song Title */}
        <div className="w-full">
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter song title"
            className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Artist Name */}
        <div className="w-full">
          <label htmlFor="artist" className="block text-sm font-medium mb-2">
            Artist
          </label>
          <input
            id="artist"
            type="text"
            placeholder="Enter Artist Name"
            className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>

        {/* Playlist Selection */}
        <div className="w-full">
          <label
            htmlFor="playlist"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Playlist:
          </label>
          <select
            id="playlist"
            value={playlistId}
            onChange={(e) => setPlaylistId(e.target.value)}
            className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">-- Select Playlist --</option>
            {playlists.map((playlist) => (
              <option key={playlist.id} value={playlist.id}>
                {playlist.title}
              </option>
            ))}
          </select>
        </div>

        {/* Track URL */}
        <div className="w-full">
          <label htmlFor="url" className="block text-sm font-medium mb-2">
            Track URL
          </label>
          <input
            id="url"
            type="file"
            className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setUrl(files[0]);
              }
            }}
          />
        </div>

        {/* Artwork */}
        <div className="w-full">
          <label htmlFor="artwork" className="block text-sm font-medium mb-2">
            Artwork
          </label>
          <input
            id="artwork"
            type="file"
            className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setArtwork(files[0]);
              }
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-400 rounded-md p-2 text-white w-full mt-4 hover:bg-blue-500 transition duration-300"
        >
          Add Track
        </button>
      </form>
    </div>
  )
}

export default AddTrackToPlaylist