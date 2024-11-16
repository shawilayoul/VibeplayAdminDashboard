import { useState, useEffect } from 'react';
import axios from 'axios';

type UsersProp = {
  id: string,
  username: string,
  email: string,
}
const Visitors = () => {
  const [users, setUsers] = useState<UsersProp[]>([]);  // Initialize with an empty array instead of an empty string

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('https://musicserver-uluy.onrender.com/user/all');
        setUsers(response.data);  // Set the data to the users state
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Visitors</h2>
      <div>
        {users.length > 0 ? (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user?.id}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-lg text-gray-800">
                  <strong>Name:</strong> {user?.username}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {user?.email}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Visitors;
