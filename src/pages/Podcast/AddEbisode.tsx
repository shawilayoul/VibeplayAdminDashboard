import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';


interface Podcasts {
  id: string,
  title: string,
  artwork: string,
  duration: number,
  description: string
}
const AddEbisode = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [description, setDescription] = useState("")
  const [artwork, setArtwork] = useState<File | null>(null)
  const [url, setUrl] = useState<File | null>(null)
  const [duration, setDuration] = useState(0)

  const [podcastId, setPodcastId] = useState("")
  const [podcasts, setPodcasts] = useState<Podcasts[]>([]);


  useEffect(() => {
    getAllPodcasts()
  }, [])
  //get alll podcasts

  const getAllPodcasts = async () => {
    try {
      const response = await axios.get('https://musicserver-uluy.onrender.com/podcast');
      setPodcasts(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('title', title);
    formData.append('artist', artist);
    formData.append('description', description);
    formData.append('duration', String(duration)); // Convert to string
    formData.append('podcastId', podcastId);
    if (url) formData.append('files', url); // Assuming `url` is a file input
    if (artwork) formData.append('files', artwork);

    // Assuming `artwork` is also a file input
    try {
      const response = await axios.post('https://musicserver-uluy.onrender.com/episode', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Response:', response.data);
      toast.success('Ebisode Created successfully')
      setTitle('')
      setArtist("")
      setDescription("")
      setDuration(0)
      setPodcastId("")
      setArtwork(null)
      setUrl(null)
    } catch (error) {
      console.error('Error details:', error);// Log response data for more context
      toast.error('Failed to add song: please try again');
    }
  }
  return (
    <div className="flex items-center justify-center p-6 mt-8 gap-6 w-full">
    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Add Episode to Podcast</h2>
  
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        
        {/* Episode Title */}
        <div>
          <label htmlFor="title" className="text-lg font-medium text-gray-700 mb-2">Episode Title or Number</label>
          <input
            id="title"
            type="text"
            placeholder="Enter episode title or number"
            className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
  
        {/* Podcast Title */}
        <div>
          <label htmlFor="podcastTitle" className="text-lg font-medium text-gray-700 mb-2">Podcast Title</label>
          <input
            id="podcastTitle"
            type="text"
            placeholder="Enter podcast title"
            className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
            required
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
  
        {/* Episode Duration */}
        <div>
          <label htmlFor="duration" className="text-lg font-medium text-gray-700 mb-2">Episode Duration (in minutes)</label>
          <input
            id="duration"
            type="number"
            placeholder="Enter episode duration in minutes"
            className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
            required
            value={duration}
            onChange={(e) => setDuration(e.target.value ? Number(e.target.value) : 0)}
          />
        </div>
  
        {/* Description */}
        <div>
          <label htmlFor="description" className="text-lg font-medium text-gray-700 mb-2">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Enter episode description"
            className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
  
        {/* Select Podcast */}
        <div>
          <label htmlFor="podcast" className="text-lg font-medium text-gray-700 mb-2">Select Podcast</label>
          <select
            id="podcast"
            value={podcastId}
            onChange={(e) => setPodcastId(e.target.value)}
            className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
          >
            <option value="">-- Select Podcast --</option>
            {podcasts.map((podcast) => (
              <option key={podcast?.id} value={podcast?.id}>
                {podcast.title}
              </option>
            ))}
          </select>
        </div>
  
        {/* Episode URL */}
        <div>
          <label htmlFor="episodeUrl" className="text-lg font-medium text-gray-700 mb-2">Episode URL</label>
          <input
            id="episodeUrl"
            type="file"
            className="p-3 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-blue-400 transition-all"
            required
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setUrl(files[0]); // Set the first file
              }
            }}
          />
        </div>
  
        {/* Artwork */}
        <div>
          <label htmlFor="artwork" className="text-lg font-medium text-gray-700 mb-2">Episode Artwork</label>
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
          Add Episode
        </button>
      </form>
    </div>
  </div>
  
  )
}

export default AddEbisode