import { Navigate, useLocation } from 'react-router-dom';

// This function checks if the user is authenticated
const isAuthenticated = () => {
  // Check if there's an auth token or user data stored in localStorage
  return localStorage.getItem('authToken') !== null;
};

const PrivateRoute = ({ element }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

export default PrivateRoute;
