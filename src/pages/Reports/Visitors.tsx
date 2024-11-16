import { useState, useEffect } from 'react';
import axios from 'axios';

type UsersProp ={
  id:string,
  username:string,
  email:string,
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
    <div>
      <h2>Visitors</h2>
      <div>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user?.id}> 
                <p><strong>Name:</strong> {user?.username}</p> 
                <p><strong>Email:</strong> {user?.email}</p> 
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Visitors;
