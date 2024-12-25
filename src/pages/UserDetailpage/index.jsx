import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetailPage = () => {
  const { userId } = useParams(); // Get the user ID from the URL parameter
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user details when the component mounts
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        setUser(response.data.data); // Set user data
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch user details');
        setLoading(false);
      });
  }, [userId]);

  return (
    <div className="px-4 pt-24">
      <h1 className="text-3xl font-bold text-center text-[#7E976B]">User Detail</h1>

      {loading && (
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-500">Loading...</p>
        </div>
      )}

      {error && (
        <div className="mt-8 text-center">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      )}

      {user && !loading && !error && (
        <div className="flex flex-col items-center space-y-6">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="object-cover w-48 h-48 rounded-full"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {user.first_name} {user.last_name}
          </h2>
          <p className="text-lg text-gray-600">{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetailPage;
