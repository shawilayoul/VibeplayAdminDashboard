import { createBrowserRouter } from "react-router-dom"
import AppLayOUt from "./AppLayOUt"
import Dashboard from "../pages/Dashboard"
import Albums from "../pages/Albums/Albums"
import AddAlbum from "../pages/Albums/AddAlbum"
import EditAlbum from "../pages/Albums/EditAlbum"
import ViewAlbum from "../pages/Albums/ViewAlbum"
import Artists from "../pages/Artists/Artists"
import AddArtist from "../pages/Artists/AddArtist"
import EditArtist from "../pages/Artists/EditArtist"
import Genres from "../pages/Podcast/Podcasts"
import AddGenre from "../pages/Podcast/AddPodcast"
import EditGenre from "../pages/Podcast/EditPodcast"
import Playlists from "../pages/Playlists/Playlists"
import AddPlaylist from "../pages/Playlists/AddPlaylist"
import EditPlaylist from "../pages/Playlists/EditPlaylist"
import ViewPlaylist from "../pages/Playlists/ViewPlaylist"
import SongsReport from "../pages/Reports/SongsReport"
import Statistics from "../pages/Reports/Statistics"
import Trending from "../pages/Reports/Trending"
import Visitors from "../pages/Reports/Visitors"
import AddSong from "../pages/Songs/AddSong"
import SongDetail from "../pages/Songs/SongDetail"
import Ebisodes from "../pages/episodes/Ebisodes"
import AddEbisode from "../pages/Podcast/AddEbisode"
import EditEbisode from "../pages/episodes/EditEbisode"
import ViewPodcastLists from "../pages/Podcast/ViewPodcastLists"
import ViewArtistTracks from "../pages/Artists/ViewArtistTracks"
import AddTrackToArtist from "../pages/Artists/AddTrackToArtist"
import AddTrendingTrack from "../pages/Songs/AddTrendingTrack"
import ViewTrendingTracks from "../pages/Songs/ViewTrendingTracks"
import AddTrackToPlaylist from "../pages/Playlists/AddTrackToList"
import ViewListTracks from "../pages/Playlists/ViewListTracks"

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOUt />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "/albums", element: <Albums /> },
            { path: "/albums/add", element: <AddAlbum /> },
            { path: "/albums/edit", element: <EditAlbum /> },
            { path: "/albums/view", element: <ViewAlbum /> },

            { path: "/artists", element: <Artists /> },
            { path: "/artists/add", element: <AddArtist /> },
            { path: "/artists/edit", element: <EditArtist /> },
            { path: "/artists/view/:id", element: <ViewArtistTracks /> },
            { path: "/artists/addTrack", element: <AddTrackToArtist /> },


            { path: "/podcasts", element: <Genres /> },
            { path: "/podcast/add", element: <AddGenre /> },
            { path: "/podcast/edit", element: <EditGenre /> },
            { path: "/podcast/view/:id", element: <ViewPodcastLists /> },


            { path: "/ebisodes", element: <Ebisodes /> },
            { path: "/ebisodes/add", element: <AddEbisode /> },
            { path: "/ebisodes/edit", element: <EditEbisode /> },

            { path: "/playlists", element: <Playlists /> },
            { path: "/playlists/add", element: <AddPlaylist /> },
            { path: "/playlists/edit", element: <EditPlaylist /> },
            { path: "/playlists/view/:id", element: <ViewPlaylist /> },
            { path: "/lists/view/:id", element: <ViewListTracks/> },

            {
                path: "/playlists/addTrack", element: <AddTrackToPlaylist /> 
            },

            { path: "/reports/songs", element: <SongsReport /> },
            { path: "/reports/statistics", element: <Statistics /> },
            { path: "/reports/trending", element: <Trending /> },
            { path: "/reports/visitors", element: <Visitors /> },

            { path: "/songs/add", element: <AddSong /> },
            { path: "/songs/detail", element: <SongDetail /> },
            { path: "/trendingTrack/add", element: <AddTrendingTrack /> },
            { path: "/trendingTrack/view", element: <ViewTrendingTracks /> },



        ]
    }
])

export default router