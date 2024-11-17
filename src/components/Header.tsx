import { useEffect, useState } from 'react';
import FJUImage from '../assets/FJU.jpg'; // Adjust the path accordingly
import { FaRegMoon, FaRegBell, FaSearch, FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [toggleProfile, setToggleProfile] = useState(false);
    const username = localStorage.getItem('username')
    const navigate = useNavigate();

    useEffect(() => {
        // Set up an interval to update the date/time every second
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Update every 1000ms (1 second)

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);


    const handleLogout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        navigate('/login');
    };
    const formattedDate = currentDateTime.toLocaleString();
    return (
        <header className="flex items-center justify-between p-4 bg-blue-600 z-50 text-white shadow-lg flex-wrap">
            {/* Left Side: Logo and App Name */}
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                <img src={FJUImage} alt="Logo" className="h-10 w-auto rounded-md shadow-md" />
                <h1 className="text-xl font-semibold text-white tracking-tight">FJU Christian Vibes</h1>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-xs mb-4 sm:mb-0 sm:max-w-md sm:ml-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-full bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Right Side: Controls (Search, Notifications, Profile, etc.) */}
            <div className="flex items-center space-x-6">
                {/* Notifications Icon */}
                <button className="relative">
                    <FaRegBell className="text-white text-2xl" />
                    <span className="absolute top-[-6px] right-[-6px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        3
                    </span>
                </button>

                {/* Theme Toggle (Light/Dark Mode) */}
                <button className="text-white text-2xl">
                    <FaRegMoon />
                </button>

                {/* Current Date/Time Display */}
                <span className="hidden sm:block text-sm">{formattedDate}</span>

                {/* User Profile Dropdown */}
                <div className="relative">
                    {/* User icon and username stacked vertically */}
                    <div className="flex flex-col items-center">
                        <FaRegUser
                            onClick={() => setToggleProfile(!toggleProfile)}
                            className="w-9 h-9 rounded-full border-2 border-white cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all"
                        />

                        {/* Username under the user icon */}
                        <div className="mt-2 text-center text-xs text-white">
                            <p>{username ? username : 'Guest'}</p>
                        </div>
                    </div>

                    {/* Profile options */}
                    {toggleProfile && (
                        <div className="absolute right-0 mt-4 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleLogout}>Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header