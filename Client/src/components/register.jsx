import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function  Register() {
const [userName, setUserName ] = useState("");
const [email, setEmail ] = useState("");
const [password, setPassword ] = useState("");
const [error, setError] = useState("");
const [messagerse , setMessageres] = useState("");
const navigate = useNavigate();

const handleSignUp = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:6000/users/register", { userName, email, password }, {
            withCredentials: true,
        });

        setMessageres(response.data.message); 
        setError(""); 

        setTimeout(() => {
            navigate("/login");
        }, 2000); 
      
    } catch (err) {
        setError("Username already exists");
        setMessageres(""); 
    }
};


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {messagerse && <div className="text-green-500 text-center mb-4">{messagerse}</div>}

        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input 
              type="text" 
              id="username" 
              className="w-full p-3 border border-gray-300 rounded-md mt-2" 
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="text" 
              id="email address" 
              className="w-full p-3 border border-gray-300 rounded-md mt-2" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 border border-gray-300 rounded-md mt-2" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Register
