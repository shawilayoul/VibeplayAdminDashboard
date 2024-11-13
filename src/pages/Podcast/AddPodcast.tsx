import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const AddGenre = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [artwork, setArtwork] = useState<File | null>(null)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (artwork) formData.append('files', artwork);
    // Assuming `artwork` is also a file input
    try {
      const response = await axios.post('https://musicserver-uluy.onrender.com/podcast', formData, {
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
    <div className="flex items-center justify-center p-6 mt-8 gap-6 w-full">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Add Podcast</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="text-lg font-medium text-gray-700 mb-2">Podcast Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter podcast title"
              className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="text-lg font-medium text-gray-700 mb-2">Description</label>
            <input
              id="description"
              type="text"
              placeholder="Enter description"
              className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Artwork Upload */}
          <div>
            <label htmlFor="artwork" className="text-lg font-medium text-gray-700 mb-2">Podcast Artwork</label>
            <input
              id="artwork"
              type="file"
              className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
              required
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  setArtwork(files[0]); // Set the first file
                }
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-3 w-full mt-4 transition-all"
          >
            Add Podcast
          </button>
        </form>
      </div>
    </div>

  )
}

export default AddGenre
