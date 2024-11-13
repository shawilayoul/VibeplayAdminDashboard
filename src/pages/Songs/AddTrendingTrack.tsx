import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const AddTrendingTrack = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [artwork, setArtwork] = useState<File | null>(null)
  const [url, setUrl] = useState<File | null>(null)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    if (url) formData.append('files', url); // Assuming `url` is a file input
    if (artwork) formData.append('files', artwork);

    // Assuming `artwork` is also a file input


    try {
      const response = await axios.post('https://musicserver-uluy.onrender.com/trending-track', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Response:', response.data);
      toast.success('playlist created successfully')
      setTitle("")
      setArtist("")
      setArtwork(null)
      setUrl(null)
    } catch (error) {
      console.error('Error details:', error);// Log response data for more context
      toast.error('Failed to add song: please try again');
    }
  }
  return (
    <div className="flex items-center justify-center flex-col p-4 gap-4 w-full">
      <h2 className="text-2xl font-medium">Add Trending Track</h2>

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
            placeholder="Enter artist name"
            className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>

        {/* Song URL (file input) */}
        <div className="w-full">
          <label htmlFor="url" className="block text-sm font-medium mb-2">
            Song URL
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

        {/* Artwork (file input) */}
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

export default AddTrendingTrack