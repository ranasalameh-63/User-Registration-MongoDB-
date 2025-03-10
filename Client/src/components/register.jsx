// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function  Register() {
// const [userName, setUserName ] = useState("");
// const [email, setEmail ] = useState("");
// const [password, setPassword ] = useState("");
// const [error, setError] = useState("");
// const [messagerse , setMessageres] = useState("");
// const navigate = useNavigate();

// const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await axios.post("http://localhost:6000/users/register", { userName, email, password }, {
//             withCredentials: true,
//         });

//         setMessageres(response.data.message); 
//         setError(""); 

//         setTimeout(() => {
//             navigate("/login");
//         }, 2000); 
      
//     } catch (err) {
//         setError("Username already exists");
//         setMessageres(""); 
//     }
// };


//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//         {messagerse && <div className="text-green-500 text-center mb-4">{messagerse}</div>}

//         <form onSubmit={handleSignUp}>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-700">Username</label>
//             <input 
//               type="text" 
//               id="username" 
//               className="w-full p-3 border border-gray-300 rounded-md mt-2" 
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input 
//               type="text" 
//               id="email address" 
//               className="w-full p-3 border border-gray-300 rounded-md mt-2" 
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-gray-700">Password</label>
//             <input 
//               type="password" 
//               id="password" 
//               className="w-full p-3 border border-gray-300 rounded-md mt-2" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Register

import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make sure to use the correct API URL here
      await axios.post('http://localhost:5000/users/register', formData);
      alert('Registration successful');
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <a href="login" className="font-medium text-blue-600 hover:text-blue-500">
              sign in to existing account
            </a>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Username"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
