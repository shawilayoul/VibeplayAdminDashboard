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
import ResetPassword from "../pages/RestPassword"
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm"
import Register from "../components/Register"
import Login from "../components/Login"
import PrivateRoute from "./PrivateRoute"
import AccountDeletion from "../components/AccountDeletion"
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOUt />,
        children: [
            { index: true, element: <PrivateRoute element={<Dashboard />} /> },
            { path: "/albums", element: <PrivateRoute element={<Albums />} /> },
            { path: "/albums/add", element: <PrivateRoute element={<AddAlbum />} /> },
            { path: "/albums/edit", element: <PrivateRoute element={<EditAlbum />} /> },
            { path: "/albums/view", element: <PrivateRoute element={<ViewAlbum />} /> },

            { path: "/artists", element: <PrivateRoute element={<Artists />} /> },
            { path: "/artists/add", element: <PrivateRoute element={<AddArtist />} /> },
            { path: "/artists/edit", element: <PrivateRoute element={<EditArtist />} /> },
            { path: "/artists/view/:id", element: <PrivateRoute element={<ViewArtistTracks />} /> },
            { path: "/artists/addTrack", element: <PrivateRoute element={<AddTrackToArtist />} /> },

            { path: "/podcasts", element: <PrivateRoute element={<Genres />} /> },
            { path: "/podcast/add", element: <PrivateRoute element={<AddGenre />} /> },
            { path: "/podcast/edit", element: <PrivateRoute element={<EditGenre />} /> },
            { path: "/podcast/view/:id", element: <PrivateRoute element={<ViewPodcastLists />} /> },

            { path: "/ebisodes", element: <PrivateRoute element={<Ebisodes />} /> },
            { path: "/ebisodes/add", element: <PrivateRoute element={<AddEbisode />} /> },
            { path: "/ebisodes/edit", element: <PrivateRoute element={<EditEbisode />} /> },

            { path: "/playlists", element: <PrivateRoute element={<Playlists />} /> },
            { path: "/playlists/add", element: <PrivateRoute element={<AddPlaylist />} /> },
            { path: "/playlists/edit", element: <PrivateRoute element={<EditPlaylist />} /> },
            { path: "/playlists/view/:id", element: <PrivateRoute element={<ViewPlaylist />} /> },
            { path: "/lists/view/:id", element: <PrivateRoute element={<ViewListTracks />} /> },

            { path: "/playlists/addTrack", element: <PrivateRoute element={<AddTrackToPlaylist />} /> },

            { path: "/reports/songs", element: <PrivateRoute element={<SongsReport />} /> },
            { path: "/reports/statistics", element: <PrivateRoute element={<Statistics />} /> },
            { path: "/reports/trending", element: <PrivateRoute element={<Trending />} /> },
            { path: "/reports/visitors", element: <PrivateRoute element={<Visitors />} /> },

            { path: "/songs/add", element: <PrivateRoute element={<AddSong />} /> },
            { path: "/songs/detail", element: <PrivateRoute element={<SongDetail />} /> },
            { path: "/trendingTrack/add", element: <PrivateRoute element={<AddTrendingTrack />} /> },
            { path: "/trendingTrack/view", element: <PrivateRoute element={<ViewTrendingTracks />} /> },
        ],
    },
    {
        path: "/resetPassword-request",
        element: <ResetPassword />
    },
    {
        path: "/reset-password/:token",
        element: <ResetPasswordConfirm />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path:"/account-deletion",
        element:<AccountDeletion/>
    }

])

export default router