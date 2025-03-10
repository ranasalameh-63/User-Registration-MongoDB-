import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:6000/users/profile", {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch profile. Please log in.");
      }
    };

    fetchUser();
  }, []);

 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {user ? (
          <div>
            <p className="text-center text-gray-700 mb-4"><strong>Username:</strong> {user.userName}</p>
            <p className="text-center text-gray-700 mb-6"><strong>Email:</strong> {user.email}</p>
            
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading profile...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
