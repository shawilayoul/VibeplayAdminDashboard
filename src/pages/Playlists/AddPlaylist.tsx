import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const AddPlaylist = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [artwork, setArtwork] = useState<File | null>(null)

  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (artwork) formData.append('files', artwork);
    // Assuming `artwork` is also a file input
    try {
      const response = await axios.post('https://musicserver-uluy.onrender.com/playlist', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Response:', response.data);
      toast.success('playlist created successfully')
      setTitle("")
      setDescription("")
      setArtwork(null)
    } catch (error) {
      console.error('Error details:', error);// Log response data for more context
      toast.error('Failed to add podcast: please try again');
    }
  }
  return (
    <div className="flex items-center justify-center flex-col p-4 mt-8 gap-4 w-full">
    <h2 className="text-2xl font-medium">Add Playlist</h2>

    <form
      onSubmit={handelSubmit}
      className="bg-white shadow-md w-full max-w-[600px] p-4 flex flex-col items-start gap-4 rounded-md"
    >
      {/* Playlist Title */}
      <div className="w-full">
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter playlist title"
          className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Playlist Description */}
      <div className="w-full">
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description
        </label>
        <input
          id="description"
          type="text"
          placeholder="Enter playlist description"
          className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Playlist Image */}
      <div className="w-full">
        <label htmlFor="artwork" className="block text-sm font-medium mb-2">
          Playlist Image
        </label>
        <input
          id="artwork"
          type="file"
          className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
              setArtwork(files[0]); // Set the first file
            }
          }}
        />
      </div>

      {/* Image Preview */}
      {artwork && (
        <div className="mt-2">
          <p className="text-sm text-gray-600">Selected Image:</p>
          <img
            src={URL.createObjectURL(artwork)}
            alt="Selected artwork"
            className="mt-2 w-[100px] h-[100px] object-cover rounded-md"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-400 rounded-md p-2 text-white w-full mt-4 hover:bg-blue-500 transition duration-300"
      >
        Add Playlist
      </button>
    </form>
  </div>
  )
}

export default AddPlaylist


