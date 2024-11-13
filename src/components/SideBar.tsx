import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDashboard, MdOutlineTrendingUp } from 'react-icons/md';
import { FaMusic, FaRegUser} from 'react-icons/fa';
import { TbPlaylist } from 'react-icons/tb';
import { IoMdAlbums } from 'react-icons/io';
import { SiGooglepodcasts } from 'react-icons/si';
import CollapsibleSection from './CollapsibleSection'; // import the reusable component

const Sidebar = () => {
  // State for toggling sections
  const [togglePlaylists, setTogglePlaylists] = useState(false);
  const [toggleSongs, setToggleSongs] = useState(false);
  const [toggleArtist, setToggleArtist] = useState(false);
  const [toggleGenres, setToggleGenres] = useState(false);
  const [toggleAlbums, setToggleAlbums] = useState(false);
  const [toggleReports, setToggleReports] = useState(false);

  return (
    <div className="flex flex-col p-5 gap-6">
      {/* Dashboard Link */}
      <div className="flex items-center gap-3 p-3 hover:bg-blue-400 rounded-md transition-colors">
        <MdOutlineDashboard />
        <Link to="/" className="text-lg font-semibold">Dashboard</Link>
      </div>

      {/* Playlists Section */}
      <CollapsibleSection
        title="Playlists"
        icon={TbPlaylist}
        items={[
          { label: 'View Playlists', link: '/playlists' },
          { label: 'Add Playlist', link: '/playlists/add' },
          { label: 'Add track to playlist', link: '/playlists/addTrack' },
        ]}
        toggleState={togglePlaylists}
        setToggleState={setTogglePlaylists}
      />

      {/* Tracks Section */}
      <CollapsibleSection
        title="Tracks"
        icon={FaMusic}
        items={[
          { label: 'Add Worship Track', link: '/songs/add' },
          { label: 'Add Trending Track', link: '/trendingTrack/add' },
          { label: 'View Worship Tracks', link: '/songs/detail' },
          { label: 'View Trending Tracks', link: '/trendingTrack/view' },
        ]}
        toggleState={toggleSongs}
        setToggleState={setToggleSongs}
      />

      {/* Artist Section */}
      <CollapsibleSection
        title="Artist"
        icon={FaRegUser}
        items={[
          { label: 'View Artists', link: '/artists' },
          { label: 'Add Artist', link: '/artists/add' },
          { label: 'Add Track to Artist', link: '/artists/addTrack' },
        ]}
        toggleState={toggleArtist}
        setToggleState={setToggleArtist}
      />

      {/* Podcasts Section */}
      <CollapsibleSection
        title="Podcasts"
        icon={SiGooglepodcasts}
        items={[
          { label: 'View Podcasts', link: '/podcasts' },
          { label: 'Add Podcast', link: '/podcast/add' },
          { label: 'Add Episode to Podcast', link: '/ebisodes/add' },
        ]}
        toggleState={toggleGenres}
        setToggleState={setToggleGenres}
      />

      {/* Albums Section */}
      <CollapsibleSection
        title="Albums"
        icon={IoMdAlbums}
        items={[
          { label: 'View Albums', link: '/albums' },
          { label: 'Add Album', link: '/albums/add' },
          { label: 'View Albums', link: '/albums/view' },
        ]}
        toggleState={toggleAlbums}
        setToggleState={setToggleAlbums}
      />

      {/* Reports Section */}
      <CollapsibleSection
        title="Reports"
        icon={MdOutlineTrendingUp}
        items={[
          { label: 'Users', link: '/reports/visitors' },
          { label: 'Songs Report', link: '/reports/songs' },
          { label: 'Statistics', link: '/reports/statistics' },
          { label: 'Trending', link: '/reports/trending' },
      
        ]}
        toggleState={toggleReports}
        setToggleState={setToggleReports}
      />
    </div>
  );
};

export default Sidebar;
