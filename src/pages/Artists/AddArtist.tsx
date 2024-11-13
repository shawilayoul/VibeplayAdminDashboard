import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

const AddArtist = () => {
  const [name, setName] = useState("")
  const [bio, setBio] = useState<File | null>(null)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', name);
    if (bio) formData.append('files', bio);

    // Assuming `artwork` is also a file input
    try {
      const response = await axios.post('https://musicserver-uluy.onrender.com/artists', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Response:', response.data);
      toast.success('artist Created successfully')
      setName("")
      setBio(null)
    } catch (error) {
      console.error('Error details:', error);// Log response data for more context
      toast.error('Failed to add artist: please try again');
    }
  }
  return (
    <div className="flex items-center justify-center flex-col p-4 gap-4 w-full">
      <h2 className="text-2xl font-medium">Add Artist</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md w-full max-w-[600px] p-4 flex flex-col gap-4 rounded-md"
      >
        {/* Artist Name */}
        <div className="w-full">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Artist Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter artist name"
            className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Artist Image */}
        <div className="w-full">
          <label htmlFor="bio" className="block text-sm font-medium mb-2">
            Artist Image
          </label>
          <input
            id="bio"
            type="file"
            className="p-2 rounded-md border w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setBio(files[0]); // Set the first file
              }
            }}
          />
          {bio && (
            <p className="text-sm text-gray-500 mt-2">
              File selected: {bio.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-400 rounded-md p-2 text-white w-full mt-4 hover:bg-blue-500 transition duration-300"
        >
          Add Artist
        </button>
      </form>
    </div>
  )
}

export default AddArtist