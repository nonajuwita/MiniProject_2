import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import ProtectedRoute from './component/routes/ProtectedRoute';
import UserDetailPage from './pages/UserDetailpage';

function App() {
  const [token, setToken] = useState(localStorage.getItem('access_token')); // Initialize token state

  // Re-check token if it's changed in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('access_token')); // Update token when it's changed
    };

    window.addEventListener('storage', handleStorageChange); // Listen for changes to localStorage

    return () => {
      window.removeEventListener('storage', handleStorageChange); // Cleanup listener on unmount
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        {/* Navbar component */}
        <Navbar token={token} setToken={setToken} />

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute token={token} />}>
              <Route path="/user/:userId" element={<UserDetailPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
