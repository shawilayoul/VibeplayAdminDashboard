import { Navigate, useLocation } from 'react-router-dom';

// This function checks if the user is authenticated
const isAuthenticated = () => {
  // Check if there's an auth token or user data stored in localStorage
  return localStorage.getItem('userToken') !== null;
};

interface PrivateRouteProps {
    element: React.ReactNode; // This type allows any valid React element
  }
  
  const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const location = useLocation();

 if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return element;
};

export default PrivateRoute;
