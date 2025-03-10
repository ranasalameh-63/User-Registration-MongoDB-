import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <Router>
    {/* Navigation Bar */}
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link to="/register" className="text-lg font-semibold hover:text-blue-400">Sign Up</Link>
          <Link to="/login" className="text-lg font-semibold hover:text-blue-400">Login</Link>
          <Link to="/profile" className="text-lg font-semibold hover:text-blue-400">Profile</Link>
        </div>
      </div>
    </nav>

    {/* Routes */}
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
  );
}

export default App;
